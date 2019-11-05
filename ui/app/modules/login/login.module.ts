import { NgModule } from '@angular/core';

import { LoginComponent } from './pages/login.page';
import { CoreModule } from '@app/core/core.module';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule, MaterialInputComponent } from '@approot/shared';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        pathMatch: 'full'
    }
];
@NgModule({
    declarations: [LoginComponent],
    imports: [CommonModule, FormsModule, SharedModule, RouterModule.forChild(routes)]
})

export class LoginModule { }
