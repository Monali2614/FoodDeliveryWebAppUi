import { Injectable } from '@angular/core';
import { Menu } from '../models/menu';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Menu[] = [];

  addToCart(menu: Menu) {
    this.cart.push(menu);
  }

  getCart() {
    return this.cart;
  }
}
