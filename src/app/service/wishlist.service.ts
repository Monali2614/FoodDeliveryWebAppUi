import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private wishlist: any[] = [];
  private cart: any[] = [];
  private favorites: any[] = [];

  constructor() {}

  addToWishlist(item: any) {
    if (!this.wishlist.includes(item)) {
      this.wishlist.push(item);
    }
  }

  removeFromWishlist(item: any) {
    const index = this.wishlist.indexOf(item);
    if (index !== -1) {
      this.wishlist.splice(index, 1);
    }
  }

  addToCart(item: any) {
    if (!this.cart.includes(item)) {
      this.cart.push(item);
      this.removeFromWishlist(item);
    }
  }

  addToFavorites(item: any) {
    if (!this.favorites.includes(item)) {
      this.favorites.push(item);
    }
  }

  getWishlist() {
    return this.wishlist;
  }

  getCart() {
    return this.cart;
  }

  getFavorites() {
    return this.favorites;
  }
}