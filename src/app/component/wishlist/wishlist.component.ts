import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/service/wishlist.service';
import { Menu } from 'src/app/models/menu';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  wishlist: any[] = [];
  loading: boolean = true;

  constructor(private wishlistService: WishlistService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.wishlist = this.wishlistService.getWishlist();
      this.loading = false;
    }, 200);
  }

  addToWishlist(item: any): void {
    this.wishlistService.addToWishlist(item);
    this.wishlist = this.wishlistService.getWishlist();
    
  }

  removeFromWishlist(item: any): void {
    this.wishlistService.removeFromWishlist(item);
    this.wishlist = this.wishlistService.getWishlist();
  }

  checkout(): void {
    // Implement checkout functionality here
  }
}

