import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/product-management/services/product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  subscription: Subscription;
  id: number;

  constructor(
    private _activatedRouterService: ActivatedRoute,
    private _productService: ProductService,
    private _routerService: Router
  ) { }

  ngOnInit(): void {
    this.handleParams();
  }

  handleParams = () => {
    this.subscription = this._activatedRouterService.parent.params.subscribe((params: Params) => {
      this.id = params.id;
    });
  }

  onDeleteProduct = (id: number) => {
    this._productService.getDeleteProductByID(this.id);
    this._routerService.navigate(['products']);
  }
}
