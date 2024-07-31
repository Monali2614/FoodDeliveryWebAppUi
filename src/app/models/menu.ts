export class Menu {
  id: number;
  itemName: string;
  description: string;
  price: number;
  image?: string;
 
  restaurant: {
    id: number;
    name: string; 
  };

  constructor(
    id: number = 0,
    itemName: string = '',
    description: string = '',
    price: number = 0,
    image?: string,
    restaurant: { id: number; name: string } = { id: 0, name: '' }
  ) {
    this.id = id;
    this.itemName = itemName;
    this.description = description;
    this.price = price;
    this.image= image;
    this.restaurant = restaurant;
  }
}