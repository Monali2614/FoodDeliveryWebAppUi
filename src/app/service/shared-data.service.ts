import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private restaurantData = new BehaviorSubject<any>([]);
  currentRestaurantData = this.restaurantData.asObservable();

  constructor() { }

  setRestaurantData(data: any) {
    this.restaurantData.next(data);
  }
}
