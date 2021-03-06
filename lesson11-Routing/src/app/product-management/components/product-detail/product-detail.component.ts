import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Product } from "../../models/product.class";
import { ProductService } from "src/app/product-management/services/product.service";
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
    private _productService: ProductService,
    private _routerService: Router
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

  onEdit = () => {
    this._routerService.navigate(['edit'], {
      relativeTo: this._activatedRoute.parent // http://localhost:3000/products // lùi vào 1 dấu "/"
    });
  }

  onDelete = () => {
    // this._routerService.navigate([`delete/${this.product.id}`], {
    //   relativeTo: this._activatedRoute.parent // http://localhost:3000/products // lùi vào 1 dấu "/"
    // });

    this._routerService.navigate(['delete'], {
      relativeTo: this._activatedRoute.parent // http://localhost:3000/products // lùi vào 1 dấu "/"
    });
  }

  onBackToList = () => {
    this._routerService.navigate(['products']);
  //   this._routerService.navigate(['list'], {
  //     relativeTo: this._activatedRoute.parent // http://localhost:3000/products // lùi vào 1 dấu "/"
  //   });
  }
}
