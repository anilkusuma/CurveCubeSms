import { Injectable } from '@angular/core';
import * as EndpointConfigurations from 'app/config/endpoint-configurations.json';

@Injectable()
export class EndpointConfigurationsService {
    private endpointConfigurations: any;

    constructor() {
        this.endpointConfigurations = EndpointConfigurations;
    }

    getCommonsUrl(env: string): any {
        return this.endpointConfigurations.default[env].COMMONS_URL;
    }
}
