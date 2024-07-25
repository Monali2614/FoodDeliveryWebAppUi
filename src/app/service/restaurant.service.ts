import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurant } from '../models/restaurant';
import { environment } from 'src/environments/environment';




const NAV_URL= environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  addRestaurant(restaurant: Restaurant): Observable<Restaurant> {
    return this.http.post<Restaurant>(`${NAV_URL}/api/restaurants/restaurant/save`, restaurant);

  }


   getAllRestaurants(): Observable<any[]> {
    return this.http.get<any[]>(`${NAV_URL}/api/restaurants/restaurant/findAll`);
  }
  
}
