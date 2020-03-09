import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  idFilter: string;
  nameFilter: string;
  statusFilter: string;

  content: string = `Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard
                    dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it
                    to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.`;
  products: any[] = [
    {
      id: 1,
      name: 'Dell inspiron n5110',
      status: true
    },
    {
      id: 2,
      name: 'Iphone 7 plus',
      status: false
    },
    {
      id: 3,
      name: 'Samsung galaxy s6',
      status: false
    },
    {
      id: 4,
      name: 'Lenovo',
      status: true
    },
    {
      id: 21,
      name: 'MacOS',
      status: true
    }
  ]
}
