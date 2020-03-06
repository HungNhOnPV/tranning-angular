import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit {
  @Input("married") isMarried: boolean = false;
  @Input("age") age: number;
  // @Input() name: string;
  private _name: string;

  constructor() {}

  ngOnInit(): void {}

  @Input()
  set name(name: string) {
    this._name = name;
  }

  getName() {
    return this._name;
  }
}
