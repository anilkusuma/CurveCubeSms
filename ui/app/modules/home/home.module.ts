import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeComponent, HomeRoutingModule, HeaderComponent,
        FooterComponent, NavigationComponent } from '@approot/modules/home';
import { SharedModule } from '@approot/shared';

@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        NavigationComponent
    ],
    imports: [CommonModule, FormsModule, HomeRoutingModule, SharedModule]
})
export class HomeModule { }
