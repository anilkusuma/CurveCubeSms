import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '@root/components/app.component';
import { HomeComponent } from '@approot/modules/home/pages/home.page';
import { RootPreloaderComponent } from '@approot/shared';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path: 'students',
                loadChildren: 'app/modules/create/create.module#CreateModule'
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
