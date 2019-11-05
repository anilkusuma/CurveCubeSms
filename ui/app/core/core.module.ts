import { NgModule } from '@angular/core';
import { EndpointConfigurationsService } from 'app/core/services/endpoint-configurations.service';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'app/core/api/api.service';
import { InitializationService } from '@app/core/initialization/initialization.service';
import { AuthenticationService } from 'app/core/authentication/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { RouteHandler } from '@app/core/routes/route-handler.service';

@NgModule({
    providers: [
        CookieService,
        EndpointConfigurationsService,
        ApiService,
        AuthenticationService,
        InitializationService,
        RouteHandler
    ],
    imports : [HttpClientModule]
})
export class CoreModule {

}
