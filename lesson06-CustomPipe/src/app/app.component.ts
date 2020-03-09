import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  arrNumber = [1, 3, 22, 4, 7];
  temple: number = 1;

  onIncrease = () => {
    this.temple = 1;
  }

  onDecrease = () => {
    this.temple = -1;
  }
}
