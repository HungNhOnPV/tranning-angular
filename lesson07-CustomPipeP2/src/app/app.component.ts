import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  sortBy: string = 'name';
  sortValue: number = 1;
  products: any[] = [
    {
      id: 1,
      name: 'Iphone 8 plus',
      price: 150
    },
    {
      id: 2,
      name: 'Samsung s10',
      price: 200
    },
    {
      id: 3,
      name: 'Iphone X',
      price: 240
    }
  ];

  onSort = (str) => {
    this.sortBy = str;
    this.sortValue = -this.sortValue;
  }
}
