import { Component, OnInit } from '@angular/core';
import { DishService } from 'src/app/service/dish.service';

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
  popularDishes: any[] = [];

  constructor(private dishService: DishService) { }

  ngOnInit(): void {
    this.fetchPopularDishes();
  }

  fetchPopularDishes(): void {
    this.dishService.getPopularDishes().subscribe(
      (dishes) => {
        this.popularDishes = dishes;
      },
      (error) => {
        console.error('Error fetching popular dishes:', error);
      }
    );
  }

  prevSlide() {
    this.activeSlideIndex = (this.activeSlideIndex > 0) ? this.activeSlideIndex - 1 : this.images.length - 1;
  }

  nextSlide() {
    this.activeSlideIndex = (this.activeSlideIndex < this.images.length - 1) ? this.activeSlideIndex + 1 : 0;
  }
}

