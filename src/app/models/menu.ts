export class Menu {
  menuId: number;
  itemName: string;
  description: string;
  price: number;
  image?: string;
  restaurant: {
    id: number;
    name: string;
  };

  constructor(
    menuId: number = 0,
    itemName: string = '',
    description: string = '',
    price: number = 0,
    image?: string,
    restaurant: { id: number; name: string } = { id: 0, name: '' }
  ) {
    this.menuId = menuId;
    this.itemName = itemName;
    this.description = description;
    this.price = price;
    this.image = image;
    this.restaurant = restaurant;
  }
}
