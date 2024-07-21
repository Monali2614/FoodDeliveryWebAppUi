import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  restaurantId: string = '';
  restaurant: any; // Replace with your restaurant type

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.restaurantId = id;
      this.fetchRestaurant(this.restaurantId);
    } else {
      // Handle the case where id is null
      console.error('Restaurant ID is null');
    }
  }

  fetchRestaurant(id: string) {
    // Replace with your service to fetch restaurant data
    const restaurants = [
      { id: '1', name: 'Restaurant 1', menu: [{ name: 'Menu Item 1', price: 10 }, { name: 'Menu Item 2', price: 20 }] },
      { id: '2', name: 'Restaurant 2', menu: [{ name: 'Menu Item 1', price: 15 }, { name: 'Menu Item 2', price: 25 }] },
      { id: '3', name: 'Restaurant 3', menu: [{ name: 'Menu Item 1', price: 12 }, { name: 'Menu Item 2', price: 22 }] },
      // Add more restaurants
    ];
    this.restaurant = restaurants.find(r => r.id === id);
  }
}
