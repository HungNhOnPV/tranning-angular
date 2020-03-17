import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { Product } from "src/app/models/product.class";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "app-product-edit",
  templateUrl: "./product-edit.component.html",
  styleUrls: ["./product-edit.component.css"]
})
export class ProductEditComponent implements OnInit {
  subscription: Subscription;
  id: number;
  product: Product = null;

  constructor(
    private _activatedRouterService: ActivatedRoute,
    private _productService: ProductService,
    private _routerService: Router
  ) {}

  ngOnInit(): void {
    this.handleParams();
  }

  handleParams = () => {
    this.subscription = this._activatedRouterService.parent.params.subscribe(
      (params: Params) => {
        this.id = params.id;
        this.product = this._productService.getProductByID(this.id);
      }
    );
  };

  onEditProduct = (product: Product) => {
    this._productService.getEditProductByID(product);
    this._routerService.navigate(["products"]);
  };
}
