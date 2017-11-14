import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RestaurantsService} from '../restaurants/restaurants.service';
import {Restaurant} from '../restaurants/restaurant/restaurant.model';

@Component({
  selector: 'mt-restaurants-details',
  templateUrl: './restaurants-details.component.html'
})
export class RestaurantsDetailsComponent implements OnInit {

	restaurant: Restaurant

  constructor(private restaurantsService: RestaurantsService, 
  						private route: ActivatedRoute) { }

  ngOnInit() {
  	this.restaurantsService.restaurantById(this.route.snapshot.params['id'])
  	.subscribe(restaurant => this.restaurant = restaurant)
  }

}
