import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: number = 0;

  constructor(
    private _routerService: Router
  ) { }

  ngOnInit(): void {
    this.checkLogin();
  }

  checkLogin = () => {
    if(localStorage.getItem('user')) {
      this._routerService.navigate(['']);
    }
  }

  onLogin = (username: string, password: string) => {
    let user = {
      username: username,
      password: password
    }
    if(username == 'admin' && password == 'admin') {
      localStorage.setItem('user', JSON.stringify(user));
      this._routerService.navigate(['products']);
    } else {
      this.error = -1;
    }
  }

}
