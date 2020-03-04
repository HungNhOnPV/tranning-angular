import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-view-to-component",
  templateUrl: "./view-to-component.component.html",
  styleUrls: ["./view-to-component.component.css"]
})
export class ViewToComponentComponent implements OnInit {
  title: string = "Event binding";
  count: number = 0;
  userName: string = '';
  name: string = '';

  constructor() {}

  ngOnInit(): void {}

  onClickMe = event => {
    alert(event.target.innerText);
  };

  onDbClickMe = event => {
    alert(event.target.innerText);
  };

  onKeyUp = event => {
    this.userName = event.target.value;
  }

  onKeyUpEnter = event => {
    this.name = event.target.value;
  }
}
