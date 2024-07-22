export class Restaurant {
    restaurant_id: number;
    rating: number;
    restaurant_address: string;
    restaurant_name: string;

    constructor(restaurant_id: number, rating: number, restaurant_address: string, restaurant_name: string) {
        this.restaurant_id = restaurant_id;
        this.rating = rating;
        this.restaurant_address = restaurant_address;
        this.restaurant_name = restaurant_name;
    }
}
