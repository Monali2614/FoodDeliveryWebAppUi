import { Component } from '@angular/core';
import { Restaurant } from 'src/app/models/restaurant';
import { MenuService } from 'src/app/service/menu.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-searchrestaurantbyitem',
  templateUrl: './searchrestaurantbyitem.component.html',
  styleUrls: ['./searchrestaurantbyitem.component.css']
})
export class SearchrestaurantbyitemComponent {
  itemName: string = '';
  restaurants: Restaurant[] = [];

  constructor(private menuItemService: MenuService, private HttpClient:HttpClient) {}

  search() {
    if (this.itemName.trim() !== '') {
      this.menuItemService.searchMenuItem(this.itemName).subscribe(
        (data: Restaurant[]) => {
          this.restaurants = data;
        },
        (error) => {
          console.error('Error fetching restaurants', error);
        }
      );
    }
  }

}
