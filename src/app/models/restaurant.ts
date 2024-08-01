import { Menu } from './menu';

export class Restaurant {
  restaurantId: number;
  restaurantName: string;
  restaurantAddress: string;
  rating: number;
  cuisines: string[];
  menus: Menu[];

  constructor(
    restaurantId: number = 0,
    restaurantName: string = '',
    restaurantAddress: string = '',
    rating: number = 0,
    cuisines: string[] = [],
    menus: Menu[] = []
  ) {
    this.restaurantId = restaurantId;
    this.restaurantName = restaurantName;
    this.restaurantAddress = restaurantAddress;
    this.rating = rating;
    this.cuisines = cuisines;
    this.menus = menus;
  }
}


//  export interface restaurant {
//   restaurantId: number;
//   restaurantName: string;
//   restaurantAddress: string;
//   rating: number;
//   cuisines: string[];
// }

