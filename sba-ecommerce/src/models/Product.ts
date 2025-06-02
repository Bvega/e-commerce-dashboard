// src/models/Product.ts

export class Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;

  constructor(data: any) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.price = data.price;
    this.discountPercentage = data.discountPercentage;
    this.rating = data.rating;
    this.stock = data.stock;
    this.brand = data.brand;
    this.category = data.category;
    this.thumbnail = data.thumbnail;
  }

  displayDetails(): void {
    console.log(`Product: ${this.title} - $${this.price}`);
  }

  getPriceWithDiscount(): number {
    const discount = (this.price * this.discountPercentage) / 100;
    return this.price - discount;
  }
}
