import { Component } from '@angular/core';
import { RestaurantService } from 'src/app/service/restaurant.service';
import { Restaurant } from '../../models/restaurant'; 

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent {
  restaurantName: string = '';
  restaurantAddress: string = '';
  rating: number = 0;
  cuisines: string = ''; 

  constructor(private restaurantService: RestaurantService) {}

  addRestaurant(): void {
    const newRestaurant: Restaurant = {
      restaurantId: 0,  // Assuming 0 for new restaurants; adjust if needed
      restaurantName: this.restaurantName,
      restaurantAddress: this.restaurantAddress,
      rating: this.rating,
      cuisines: this.cuisines.split(',').map(cuisine => cuisine.trim()),
      menus: []  // Add an empty array for menus
    };

    this.restaurantService.addRestaurant(newRestaurant).subscribe(
      response => {
        console.log('Restaurant added successfully', response);
        this.restaurantName = '';
        this.restaurantAddress = '';
        this.rating = 0;
        this.cuisines = ''; 
      },
      error => {
        console.error('Error adding restaurant', error);
      }
    );
  }
}
