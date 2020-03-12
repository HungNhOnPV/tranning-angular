import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  arrNumber: number[] = [1, 3, 22, 4, 7];
  temple: number = 1;
  name: string = '';

  onIncrease = () => {
    this.temple = 1;
  }

  onDecrease = (): void => {
    this.temple = -1;
  }
}
