import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Restaurant } from '../models/restaurant';
import { Observable } from 'rxjs';
import { Menu } from '../models/menu';


const NAV_URL= environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }


  searchMenuItem(itemName: string): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${NAV_URL}/api/menus/menu/by-menu/${itemName}`);
  }

  
  getAllMenus(): Observable<Menu[]> {
    return this.http.get<Menu[]>(`${NAV_URL}/api/menus/menu/getAllMenus`);
  }


  getRestaurantsByMenu(itemName: string): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${NAV_URL}/api/menus/menu/by-menu/${itemName}`);
  }
}
