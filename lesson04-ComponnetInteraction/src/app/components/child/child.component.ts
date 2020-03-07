import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

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
  txtFullName: string;
  @Output("txtFullName") onHandleFullName = new EventEmitter<string>();
  txtPhone: number;
  @Output("txtPhone") onHandlePhone = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  @Input()
  set name(name: string) {
    this._name = name;
  }

  getName() {
    return this._name;
  }

  onSubmitForm = () => {
    this.onHandleFullName.emit(this.txtFullName);
    this.onHandlePhone.emit(this.txtPhone);
  };
}
