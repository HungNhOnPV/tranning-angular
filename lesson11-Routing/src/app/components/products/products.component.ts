import { Component, OnInit, OnDestroy } from "@angular/core";
import { ProductService } from "../../services/product.service";
import { Product } from "../../models/product.class";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from 'rxjs';

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  price: number;
  name: string;
  paramsSubscription: Subscription;

  constructor(
    private _productService: ProductService,
    private _routerService: Router,
    private _activatedRouterService: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.paramsSubscription = this._activatedRouterService.queryParams.subscribe(data => {
      let name = data['name'];
      let price = data['price'];
      this.name = name;
      this.price = price;
      this.products = this._productService.getAllProducts(name, price);
    });
  }

  ngOnDestroy(): void {
    if(this.paramsSubscription) {
      this.paramsSubscription.unsubscribe();
    }
  }

  onSearch = () => {
    this._routerService.navigate(["products"], {
      queryParams: { name: this.name ? this.name : '', price: this.price ? this.price : '' }
    });
  };
}
