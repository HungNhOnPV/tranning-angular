import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-two-way-binding",
  templateUrl: "./two-way-binding.component.html",
  styleUrls: ["./two-way-binding.component.css"]
})
export class TwoWayBindingComponent implements OnInit {
  title: string = "Two way binding";
  name: string = "";
  gender: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
