import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  subscription: Subscription;
  id: number;

  constructor(
    private _activatedRouterService: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.handleParams();
  }

  handleParams = () => {
    this.subscription = this._activatedRouterService.parent.params.subscribe((params: Params) => {
      this.id = params.id;
      console.log(this.id);
    });
  }
}
