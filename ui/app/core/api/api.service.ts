import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { EndpointConfigurationsService } from 'app/core/services/endpoint-configurations.service';
import { Observable, throwError } from 'rxjs';
import {catchError, map, retry, tap} from 'rxjs/operators';
import {ServiceError} from '@app/core/error-handling/service-error.model';

@Injectable()
export class ApiService {
    private endpointConfigurationsService: EndpointConfigurationsService;
    private http: HttpClient;
    private httpPostOptions: object = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };


    constructor(endpointConfigurationsService: EndpointConfigurationsService,
                httpClient: HttpClient) {
        this.endpointConfigurationsService = endpointConfigurationsService;
        this.http = httpClient;
    }

    getFromCommonService(url: string): Observable<any> {
        console.log('Calling CurveCubeCommons service to get data');
        return this.http.get(this._getCommonsApiBaseURL() + 'api/' + url)
            .pipe(
                tap((data: any) => {
                    if (!(data.responseStatus && data.responseData)) {
                        throw new Error(this._getErrorDetails(data));
                    }
                }),
                map((data: any) => {
                    return data.responseData;
                }),
                catchError(this._handleError)
            );
    }

    _getCommonsApiBaseURL(): string {
        return this.endpointConfigurationsService.getCommonsUrl('development');
    }

    _getErrorDetails(error: any): any {
        const errorMessage: any = {};
        errorMessage.message = error.errorMessage;
        errorMessage.errorCode = error.errorCode;
        return JSON.stringify(errorMessage);
    }

    _handleError(error: any) {
        let errorMessage: any = {};
        if (error.error instanceof ErrorEvent) {
            errorMessage.message = error.error.message;
        } else if (error instanceof Error) {
            errorMessage = JSON.parse(error.message);
        } else {
            errorMessage.message = error.errorMessage;
            errorMessage.errorCode = error.errorCode;
        }
        const serviceError: ServiceError = new ServiceError(errorMessage.errorCode, errorMessage.message);
        return throwError(serviceError);
    }
}
