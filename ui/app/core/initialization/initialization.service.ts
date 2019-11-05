import { Injectable } from '@angular/core';
import { AuthenticationService } from '@app/core/authentication/authentication.service';
import { RouteHandler } from '@app/core/routes/route-handler.service';

@Injectable()
export class InitializationService {
    private authService: AuthenticationService;
    private routeHandler: RouteHandler;

    constructor(auth: AuthenticationService, routeHander: RouteHandler) {
        this.authService = auth;
        this.routeHandler = routeHander;
    }

    init() {
        this.authService.loginUserUsingCookies().subscribe((status) => {
            this.routeHandler.loadRoutes(status);
        });
    }
}
