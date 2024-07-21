import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { Dish } from '../models/dish';
import { Menu } from '../models/menu';
const NAV_URL = environment.apiURL;


@Injectable({
  providedIn: 'root'
})
export class DishService {


  constructor(private http: HttpClient) { }

  getPopularDishes(): Observable<Menu[]> {
    const url = `${NAV_URL}api/menus/menu/getAllMenus`; // Endpoint for fetching all menus
    return this.http.get<Menu[]>(url);
  }
}
