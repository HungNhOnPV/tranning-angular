import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product } from "../../models/product.class";
import { ProductService } from "../../services/product.service";
import { Subscription } from 'rxjs';

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"]
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  product: Product = null;
  subscription: Subscription;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _productService: ProductService
  ) {}

  ngOnInit(): void {
    // this.handleParamsRouteBySnapshot();
    this.handleParams();
  }

  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  handleParams = () => {
    let id = null;
    this.subscription = this._activatedRoute.params.subscribe(data => {
      id = data.id;
    });
    this.product = this._productService.getProductByID(id);
  }

  handleParamsRouteBySnapshot = () => {
    let id = (+this._activatedRoute.snapshot.params['id']);
    this.product = this._productService.getProductByID(id);
  }
}
