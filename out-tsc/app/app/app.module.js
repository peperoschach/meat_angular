var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantsDetailsComponent } from './restaurants-details/restaurants-details.component';
import { MenuComponent } from './restaurants-details/menu/menu.component';
import { ShoppingCartComponent } from './restaurants-details/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaurants-details/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurants-details/reviews/reviews.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { SharedModule } from './shared/shared.module';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            HeaderComponent,
            HomeComponent,
            RestaurantsComponent,
            RestaurantComponent,
            RestaurantsDetailsComponent,
            MenuComponent,
            ShoppingCartComponent,
            MenuItemComponent,
            ReviewsComponent,
            OrderSummaryComponent
        ],
        imports: [
            BrowserModule,
            BrowserAnimationsModule,
            HttpModule,
            FormsModule,
            ReactiveFormsModule,
            SharedModule.forRoot(),
            RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules })
        ],
        providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map