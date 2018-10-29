import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { DetailsComponent } from './details/details.component';
import { AdminComponent} from './admin/admin.component';

const appRoutes = [
    {
        path: '',
        component: WelcomeComponent
    },
    {
        path: 'details/:id',
        component: DetailsComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

