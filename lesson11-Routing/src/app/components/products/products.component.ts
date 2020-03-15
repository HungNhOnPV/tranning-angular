import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../services/product.service";
import { Product } from "../../models/product.class";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this.products = this._productService.getAllProducts();
  }
}
