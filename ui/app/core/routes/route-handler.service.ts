import { Injectable } from '@angular/core';
import { RouterModule, Router, Route } from '@angular/router';
import { User } from 'app/models/user.model';
import { SharedDataHandlerService } from '@app/core/global/shared-data-handler.service';

@Injectable()
export class RouteHandler {

    router: Router;
    sharedDataHandler: SharedDataHandlerService;
    private homeRoute: Route[] = [
        {
            path: '',
            loadChildren: 'app/modules/home/home.module#HomeModule',
        },
        {
            path: '**',
            redirectTo: ''
        }
    ];
    private loginRoute: Route[] = [
        {
            path: 'login',
            loadChildren: 'app/modules/login/login.module#LoginModule'
        },
        {
            path: '**',
            redirectTo: 'login'
        }
    ];


    constructor(router: Router, sharedDataHandler: SharedDataHandlerService) {
        this.router = router;
        this.sharedDataHandler = sharedDataHandler;
    }

    loadRoutes(status: boolean) {
        this.router.onSameUrlNavigation = 'reload';
        if (!status) {
            this.router.resetConfig(this.loginRoute);
            this.redirectToRoute('/login');
        } else {
            this.router.resetConfig(this.homeRoute);
            this.redirectToRoute(this.router.url);
        }
    }

    redirectToRoute(route: string, options?: any) {
        this.router.navigateByUrl(route);
    }
}
