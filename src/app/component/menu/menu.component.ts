
import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/service/menu.service';
import { Menu } from 'src/app/models/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: Menu[] = [];

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.getAllMenus().subscribe(
      (data: Menu[]) => {
        this.menuItems = data;
      },
      (error) => {
        console.error('Error fetching menu items', error);
      }
    );
  }

  addToCart(item: Menu): void {
    // Implement your add to cart functionality here
    console.log('Added to cart:', item);
  }
}
