import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { CoreModule } from '@app/core/core.module';
import { SharedDataHandlerService } from '@app/core/global/shared-data-handler.service';
import { SharedMessageService } from '@approot/core';
import { RootPreloaderComponent, SharedModule } from '@approot/shared';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        SharedModule
    ],
    providers: [SharedDataHandlerService, SharedMessageService],
    bootstrap: [AppComponent]
})
export class AppModule {

}
