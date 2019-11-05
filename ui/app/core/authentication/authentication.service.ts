import { Injectable } from '@angular/core';
import { ApiService } from 'app/core/api/api.service';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'app/models/user.model';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { SharedDataHandlerService } from '@app/core/global/shared-data-handler.service';
import { ErrorCode } from '@app/core/error-handling/error-code.model';
import { ServiceError } from '@app/core/error-handling/service-error.model';

@Injectable()
export class AuthenticationService {
    private apiService: ApiService;
    private cookieService: CookieService;
    private sharedDataHandler: SharedDataHandlerService;

    static GET_VALIDATOR_COOKIE_KEY(): string { return  'validator'; }
    static GET_SELECTOR_COOKIE_KEY(): string { return 'selector'; }
    static GET_USER_ID_COOKIE_KEY(): string { return 'userId'; }


    constructor(apiService: ApiService, cookieService: CookieService,
                sharedDataHandlerService: SharedDataHandlerService) {
        this.apiService = apiService;
        this.cookieService = cookieService;
        this.sharedDataHandler = sharedDataHandlerService;
    }

    getLoggedInUser(): Observable<User> {

        if (this.isUserLoggedIn()) { return of(this.sharedDataHandler.getLoggedInUser()); }

        const userId = this.cookieService
                .get(AuthenticationService.GET_USER_ID_COOKIE_KEY());
        const selector = this.cookieService
                .get(AuthenticationService.GET_SELECTOR_COOKIE_KEY());
        const validator = this.cookieService
            .get(AuthenticationService.GET_VALIDATOR_COOKIE_KEY());
        console.log('Call for getLoggedInUser received');

        let validateUrl = 'Logins/Validate?';
        validateUrl = validateUrl.concat('userId=', userId, '&selector=', selector,
                '&validator=', validator);
        return this.apiService.getFromCommonService(validateUrl).pipe(
            map(data => {
                return User.create(data);
            })
        );
    }

    isUserLoggedIn(): boolean {
        if (this.sharedDataHandler.getLoggedInUser()) {
            return true;
        }
    }

    loginUserUsingCookies(): Observable<boolean> {
        return this.getLoggedInUser().pipe(
            map((user: User) => {
                console.log('Logged in user');
                console.log(user);
                this.sharedDataHandler.setLoggedInUser(user);
                return true;
            }),
            catchError((error: ServiceError) => {
                this.sharedDataHandler.setLoggedInUser(null);
                return of(false);
            })
        );
    }

    loginUser(userName: string, password: string, rememberMe: boolean): Observable<boolean> {
        let remember = 'N';
        let expiryDate = null;
        if (rememberMe) { remember = 'Y'; expiryDate = new Date('2030'); }

        const loginUrl = '/Logins/login?userName=' + userName
            + '&password=' + password + '&rememberMe=' + remember;

        return this.apiService.getFromCommonService(loginUrl).pipe(
            map((response) => {
                console.log(response);
                this.cookieService.set(AuthenticationService.GET_SELECTOR_COOKIE_KEY(),
                        response.selector, expiryDate, '/');
                this.cookieService.set(AuthenticationService.GET_VALIDATOR_COOKIE_KEY(),
                        response.validator, expiryDate, '/');
                this.cookieService.set(AuthenticationService.GET_USER_ID_COOKIE_KEY(),
                        response.userId, expiryDate, '/');
                return true;
            }),
            catchError((error: ServiceError) => {
                this.clearCookies();
                return of(false);
            })
        );
    }

    logoutUser() {
        this.clearCookies();
    }

    clearCookies() {
        //this.cookieService.deleteAll('/');
    }
}
