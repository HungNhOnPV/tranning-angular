import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-structural",
  templateUrl: "./structural.component.html",
  styleUrls: ["./structural.component.css"]
})
export class StructuralComponent implements OnInit {
  isShow: boolean = false;
  userName: string = "Pham Viet Hung";
  isChecked: boolean = true;
  age: number;
  names: string[] = ["Ha Noi", "Nam Dinh"];
  products: any[] = [
    {
      id: 1,
      name: "I phone 6 plus",
      price: 3000000
    }
  ];

  users: any[] = [
    {
      name: 'John Smith',
      country: 'USA'
    },
    {
      name: 'Pham Viet Hung',
      country: 'VN'
    },
    {
      name: 'Nguyen Thi Huong',
      country: 'VN'
    },
    {
      name: 'Tran Van Hiep',
      country: 'Laos'
    }
  ]

  productsFormServers: any[] = [
    {
      id: 1,
      name: "I phone 6 plus",
      price: 3000000
    },
    {
      id: 2,
      name: "I phone 7 plus",
      price: 10000000
    },
    {
      id: 3,
      name: "I phone 8 plus",
      price: 11000000
    },
    {
      id: 4,
      name: "I phone 10 plus",
      price: 15000000
    },
    {
      id: 5,
      name: "I phone 11 plus",
      price: 5000000
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  onChange = value => {
    this.isChecked = value;
  };

  onFetchData = () => {
    this.products = this.productsFormServers;
  };

  myTrackByFunction = (index, item) => {
    return item.id;
  };
}
