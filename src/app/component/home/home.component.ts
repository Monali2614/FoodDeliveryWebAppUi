import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/menu';
import { MenuService } from 'src/app/service/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images = [
    '/assets/150 off.jpg',
    '/assets/coupen.jpeg',
    '/assets/Zomato-digital-dining-revolution.png'
  ];

  activeSlideIndex = 0;
  // popularDishes1: any[] = [];
  popularDishes: Set<string> = new Set(); // Set of popular dish names
  menus: Menu[] = []; // Initialize as an empty array\

  
  
  constructor(private menuService: MenuService) { }

  ngOnInit(): void {

    this.getPopularDishes();
    this.getMenus();
    
  }


  getMenus(): void {
    this.menuService.getAllMenus().subscribe(
      (data: Menu[]) => {
        this.menus = this.removePopularDishes(data);
      },
      error => console.error('Error fetching menu data', error)
    );
  }

  getPopularDishes(): void {
    this.popularDishes = new Set(['Dish 1', 'Dish 2']); // Replace with actual popular dish names
  }

  removePopularDishes(menus: Menu[]): Menu[] {
    return menus.filter(menu => !this.popularDishes.has(menu.itemName));
  }

  prevSlide() {
    this.activeSlideIndex = (this.activeSlideIndex > 0) ? this.activeSlideIndex - 1 : this.images.length - 1;
  }

  nextSlide() {
    this.activeSlideIndex = (this.activeSlideIndex < this.images.length - 1) ? this.activeSlideIndex + 1 : 0;
  }

}