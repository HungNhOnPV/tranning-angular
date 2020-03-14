import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../../services/logging.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  private _LoggingService: LoggingService;

  constructor(_LoggingService: LoggingService) {
    this._LoggingService = _LoggingService;
  }

  ngOnInit(): void {
  }

  click = () => {
    this._LoggingService.logging();
    // this.logging();
  }

  // logging = () => {
  //   console.log('Hello');
  // }

}
