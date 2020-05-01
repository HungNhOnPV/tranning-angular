import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServerHttpService } from './services/server-http.service';
import * as _ from 'lodash';

@Component({
  selector: 'covid19-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'covid19';
  subscription: Subscription;
  globalData = [];
  countriesData = [];

  chartOptions = {
    responsive: true
  };

  chartData = [
    { data: [330, 600, 260, 700], label: 'Account A' },
    { data: [120, 455, 100, 340], label: 'Account B' },
    { data: [45, 67, 800, 500], label: 'Account C' }
  ];

  chartLabels = ['January', 'February', 'Mars', 'April'];

  constructor(
    private serverHttp: ServerHttpService
  ) {}

  ngOnInit(): void {
    this.subscription = this.serverHttp.getSummary().subscribe(data => {
      this.globalData = data.Global;
      this.countriesData = data.Countries;
    });
  }

  ngOnDestroy() {
    if(this.subscription) this.subscription.unsubscribe;
  }

  onChartClick(event) {
    console.log(event);
  }

  onOderBy = (key, dir) => {
    this.countriesData = _.orderBy(this.countriesData, key, dir);
  }

}
