import {Component, OnDestroy, OnInit} from '@angular/core';
import { InputModel } from '@app/shared/components/input/input.model';
import { AuthenticationService } from '@app/core/authentication/authentication.service';
import { RouteHandler } from '@app/core/routes/route-handler.service';
import { InitializationService } from '@app/core/initialization/initialization.service';
import {Router, Event, NavigationStart, NavigationEnd} from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedMessageService } from '@approot/core';
declare var $: any;

@Component({
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.css']
})
export class HomeComponent implements OnInit, OnDestroy {
    private authentication: AuthenticationService;
    private routeHandler: RouteHandler;
    private initializationHandler: InitializationService;
    private router: Router;
    private sharedMessageService: SharedMessageService;
    showRootPreloader = true;
    routerEventSubscription: Subscription;

    constructor(authenticationService: AuthenticationService, routeHandler: RouteHandler,
                initializationService: InitializationService, router: Router,
                sharedMessageService: SharedMessageService) {
        this.authentication = authenticationService;
        this.routeHandler = routeHandler;
        this.initializationHandler = initializationService;
        this.router = router;
        this.sharedMessageService = sharedMessageService;
    }

    ngOnInit(): void {
        console.log('Home Component initialized ');
        this.sharedMessageService.subscribe('SetPreloaderEvent', this._setPreloader);
        this.routerEventSubscription =
            this.router.events.subscribe(this.handlerRouterEvents);
    }

    ngOnDestroy(): void {
        this.routerEventSubscription.unsubscribe();
    }

    handlerRouterEvents(event: Event) {
        switch (true) {
            case event instanceof NavigationStart: {
                this.showRootPreloader = true;
                break;
            }
            default: {
                break;
            }
        }
    }

    _setPreloader(showPreloader: boolean) {
        this.showRootPreloader = showPreloader;
    }
}

