import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  error: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onAccess = (key: string) => {
    if(key === "123456") {
      localStorage.setItem('key', key);
      this.error = -1;
    } else {
      localStorage.removeItem('key');
      this.error = 1;
    }
  }

}
