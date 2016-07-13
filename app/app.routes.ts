import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductRoutes } from './products/product.routes';

export const routes: RouterConfig = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	...ProductRoutes
];

export const APP_ROUTER_PROVIDERS = [
	provideRouter(routes)
];