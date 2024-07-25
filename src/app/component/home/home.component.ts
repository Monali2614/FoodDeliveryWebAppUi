import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/app/models/menu';
import { MenuService } from 'src/app/service/menu.service';
import { SharedDataService } from 'src/app/service/shared-data.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  images = [
    '/assets/imageslider3.png',
    '/assets/foodimage.jpg',
    '/assets/imageslide1.jpg',
  ];

  activeSlideIndex = 0;
  popularDishes: Set<string> = new Set();
  menus: Menu[] = [];
  restaurants: any;
  private slideInterval$: Subscription = new Subscription();

  constructor(
    private menuService: MenuService,
    private router: Router,
    private sharedDataService: SharedDataService
  ) { }

  ngOnInit(): void {
    this.getPopularDishes();
    this.getMenus();
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    // Clean up the interval subscription when the component is destroyed
    this.slideInterval$.unsubscribe();
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
    this.popularDishes = new Set(['Dish 1', 'Dish 2']);
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

  startAutoSlide(): void {
    // Change slide every 3 seconds
    this.slideInterval$ = interval(3500).subscribe(() => this.nextSlide());
  }

  onMenuClick(menu: Menu): void {
    this.menuService.getRestaurantsByMenu(menu.itemName).subscribe(
      (data: any) => {
        this.sharedDataService.setRestaurantData(data);
        this.router.navigate(['/restaurant-list']);
      },
      error => console.error('Error fetching restaurants by menu', error)
    );
  }
}
