import { Component } from '@angular/core';
import { Restaurant } from 'src/app/models/restaurant';
import { RestaurantService } from 'src/app/service/restaurant.service';


@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent {
  restaurant: Restaurant = new Restaurant('', '', [], 0);


  constructor(private restaurantService: RestaurantService) { }

  onSubmit() {
    this.restaurantService.addRestaurant(this.restaurant).subscribe(
      response => {
        console.log('Restaurant saved successfully', response);

      },
      error => {
        console.error('Error saving restaurant', error);

      }
    );
  }

  splitCuisines(event: string): void {
    this.restaurant.cuisines = event.split(',').map(cuisine => cuisine.trim());
  }


}
