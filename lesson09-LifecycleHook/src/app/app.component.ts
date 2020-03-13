import {
  Component,
  AfterViewInit,
  AfterViewChecked,
  ViewChild,
  ElementRef
} from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit, AfterViewChecked {
  title: string = "AppComponent";
  isShow: boolean = true;
  total: number = 0;
  a: number;
  b: number;
  content: string = "ng-content";
  products: any[] = [
    {
      id: 1,
      name: "Iphone 7"
    },
    {
      id: 2,
      name: "Iphone 8"
    },
    {
      id: 3,
      name: "Iphone X"
    }
  ];

  @ViewChild("arrProductsAfter") arrProductsAfter: ElementRef;

  onToggle = () => {
    this.isShow = !this.isShow;
  };

  onAmount = () => {
    this.total = this.a + this.b;
  };

  onClick = value => {
    this.content = value;
  };

  onAddProduct = value => {
    this.products.push({
      id: 4,
      name: value
    });
    value = "";
  };

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit: AppComponent");
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked: AppComponent");
    console.log(this.arrProductsAfter);
  }
}
