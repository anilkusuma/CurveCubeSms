import {Component, OnInit} from '@angular/core';
import { InitializationService } from '@app/core/initialization/initialization.service';

@Component({
    selector: 'app-root',
    template: `<router-outlet> </router-outlet>`
})
export class AppComponent implements OnInit {
    initializationService: InitializationService;

    constructor(initializationService: InitializationService) {
        this.initializationService = initializationService;
    }

    ngOnInit(): void {
        this.initializationService.init();
    }
}

