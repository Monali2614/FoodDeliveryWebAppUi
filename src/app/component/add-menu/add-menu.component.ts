import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from 'src/app/service/menu.service';
import { Menu } from '../../models/menu';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {
  restaurantId: number = 0;
  newItemName: string = '';
  newDescription: string = '';
  newPrice: number = 0;

  constructor(
    private route: ActivatedRoute,
    private menuService: MenuService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.restaurantId = Number(params.get('id')) || 0;
    });
  }

  addMenuItem(): void {
    if (this.restaurantId > 0) {
      // Convert restaurantId to string if necessary
      const restaurantIdStr = this.restaurantId.toString();

      const newMenuItem = new Menu(
        0, // Assuming 0 for new menu items; adjust if needed
        this.newItemName,
        this.newDescription,
        this.newPrice,
        restaurantIdStr // Pass restaurantId as a string
      );

      this.menuService.addMenu(this.restaurantId, newMenuItem).subscribe(
        (menu: Menu) => {
          this.router.navigate(['/admin-panel']);
        },
        (error: any) => {
          console.error('Error adding menu item', error);
          alert(`Error adding menu item: ${error}`);
        }
      );
    } else {
      alert('Invalid restaurant ID');
    }
  }
}
