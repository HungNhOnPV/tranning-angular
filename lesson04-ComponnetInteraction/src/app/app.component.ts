import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  isMarried: boolean = true;
  age: number = 23;
  name: string = "Huong";
  users: any[] = [
    {
      id: 1,
      name: "Pham Viet Hung",
      phone: "0972093127"
    },
    {
      id: 2,
      name: "Nguyen Thi Huong",
      phone: "0123456789"
    },
    {
      id: 3,
      name: "Tran Van Hiep",
      phone: "0931234452"
    }
  ];
  txtFullName: string;
  txtPhone: number;

  onGetFullName = value => {
    this.txtFullName = value;
  };

  onGetPhone = value => {
    this.txtPhone = value;
  };
}
