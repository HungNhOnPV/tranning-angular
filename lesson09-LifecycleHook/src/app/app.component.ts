import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = 'AppComponent'
  isShow: boolean = true;
  total: number = 0;
  a: number;
  b: number;
  content: string = "ng-content";

  onToggle = () => {
    this.isShow = !this.isShow;
  }

  onAmount = () => {
    this.total = this.a + this.b;
  }

  onClick = value => {
    this.content = value;
  }

}
