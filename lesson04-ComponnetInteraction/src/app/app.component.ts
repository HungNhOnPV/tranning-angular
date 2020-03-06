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
      name: 'Pham Viet Hung',
      address: 'Nam Dinh'
    },
    {
      id: 2,
      name: 'Nguyen Thi Huong',
      address: 'Thai Binh'
    },
    {
      id: 3,
      name: 'Tran Van Hiep',
      address: 'Ha Noi'
    }
  ]
}
