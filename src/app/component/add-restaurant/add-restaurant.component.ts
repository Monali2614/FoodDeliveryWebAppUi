import { Component } from '@angular/core';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent {
  restaurantName: string = ''; // Initialize the property
  restaurantLocation: string = ''; // Initialize the property
  restaurantMenu: string = ''; // Initialize the property
  menuDescription: string = ''; // Initialize the property

  onSubmit() {
    // Handle the form submission logic here
    console.log('Form submitted with the following values:');
    console.log('Restaurant Name:', this.restaurantName);
    console.log('Restaurant Location:', this.restaurantLocation);
    console.log('Restaurant Menu:', this.restaurantMenu);
    console.log('Menu Description:', this.menuDescription);
    
  }
}
