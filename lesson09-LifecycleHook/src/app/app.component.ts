import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isShow: boolean = false;

  onToggle = () => {
    this.isShow = !this.isShow;
  }

}
