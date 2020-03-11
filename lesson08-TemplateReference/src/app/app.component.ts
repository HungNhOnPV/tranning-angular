import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild("txtName") name: ElementRef;

  onGetData = value => {
    console.log(value.value);
  };

  onGetDataComp = () => {
    console.log(this.name.nativeElement.value);
  };
}
