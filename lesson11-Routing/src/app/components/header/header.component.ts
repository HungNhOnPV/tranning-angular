import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {

  temp: number = 1;

  constructor(
    private _routerService: Router
  ) { }

  @Input() title: string;

  ngOnInit(): void {}

  ngDoCheck(): void {
    if(localStorage.getItem('user')) {
      this.temp = -1;
    }
  }

  onLogout = () => {
    if(localStorage.getItem('user')) {
      localStorage.removeItem('user');
      this._routerService.navigate(['']);
      this.temp = 1;
    }
  }

}
