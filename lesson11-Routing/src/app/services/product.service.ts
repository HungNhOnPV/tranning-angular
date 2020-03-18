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

  getAllProducts = (name?: string, price?: number) => {
    if(name) {
      return this.products.filter(x => {
        return x.name.toLowerCase().indexOf(name.toLowerCase()) != -1;
      });
    }
    if(price) {
      return this.products.filter(x => {
        return x.price == price;
      });
    }
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

  getEditProductByID = (product: Product) => {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == product.id) {
        this.products[i].name = product.name;
        this.products[i].price = product.price;
        this.products[i].status = product.status;
        break;
      }
    }
  };

  getDeleteProductByID = (id: number) => {
    for(let i = 0; i < this.products.length; i++) {
      if(this.products[i].id == id) {
        this.products.splice(i, 1);
      }
    }
  }
}
