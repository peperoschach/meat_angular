import {Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {RestaurantsComponent} from './restaurants/restaurants.component';
import {RestaurantsDetailsComponent} from './restaurants-details/restaurants-details.component';
import {AboutComponent} from './about/about.component';
import {MenuComponent} from './restaurants-details/menu/menu.component';
import {ReviewsComponent} from './restaurants-details/reviews/reviews.component';
import {OrderComponent} from './order/order.component';
import {OrderSummaryComponent} from './order-summary/order-summary.component';

export const ROUTES: Routes = [
	{path: '', component: HomeComponent},
	{path: 'restaurants', component: RestaurantsComponent},
	{path: 'restaurants/:id', component: RestaurantsDetailsComponent,
		children: [
			{path: '', redirectTo: 'menu', pathMatch: 'full'},
			{path: 'menu', component: MenuComponent},
			{path: 'reviews', component: ReviewsComponent}
		]
	},
	{path: 'order', component: OrderComponent},
  {path: 'order-summary', component: OrderSummaryComponent},
	{path: 'about', component: AboutComponent}
]
