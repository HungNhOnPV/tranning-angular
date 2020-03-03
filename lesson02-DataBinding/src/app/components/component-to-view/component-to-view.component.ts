import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-component-to-view",
  templateUrl: "./component-to-view.component.html",
  styleUrls: ["./component-to-view.component.css"]
})
export class ComponentToViewComponent implements OnInit {
  // name: string = "Pham Viet Hung";
  // age: number = 23;
  // isMarried: boolean = false;
  user /**: object **/ = {
    name: "Pham Viet Hung",
    age: 23,
    isMarried: false
  };

  imgLink: string = 'https://gamek.mediacdn.vn/2019/8/18/1-15660708083971376414831.jpg';
  link: string = 'https://google.com.vn';

  constructor() {
  }

  ngOnInit(): void {}

  showInfo() {
    return `Name: ${this.user['name']}`;
  }
}
