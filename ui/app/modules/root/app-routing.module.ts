import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import { AppComponent } from '@root/components/app.component';
import { RootPreloaderComponent } from '@app/shared/components/preloader/root-preloader.component';

const routes: Routes = [
    {
        path: '**',
        component: RootPreloaderComponent
    },
    {
        path: 'home',
        loadChildren: 'app/modules/home/home.module#HomeModule',
    },
    {
        path: 'login',
        loadChildren: 'app/modules/login/login.module#LoginModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: true, preloadingStrategy : PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
