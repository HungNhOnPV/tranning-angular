import { Injectable } from "@angular/core";
import { Product } from "../models/product.class";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  products: Product[] = [
    new Product(1, "Iphone 7", 500, true),
    new Product(2, "Iphone 8", 1000, false),
    new Product(3, "Iphone X", 1300, true)
  ];

  constructor() {}

  getAllProducts = () => {
    return this.products;
  };

  getProductByID = (id: number) => {
    let result = null;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
        result = this.products[i];
        break;
      }
    }
    return result;
  };
}
