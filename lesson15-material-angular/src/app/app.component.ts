import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { CommonService } from './services/common.service';
import { Subscription } from 'rxjs';
import { ServerHttpService } from './services/serverHttp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'material-angular';
  @ViewChild('sidenav') sidenav: MatSidenav;
  isOpened = false;
  totalStudent = 0;
  subScription: Subscription;

  constructor(
    private common: CommonService,
    private serverHttp: ServerHttpService,
  ) {}

  ngOnInit() {
    this.subScription = this.common.totalStudent$.subscribe(data => {
      this.totalStudent = data;
    });
    if(this.totalStudent === 0) {
      this.subScription = this.serverHttp.getStudents().subscribe(data => {
        this.common.setTotalStudent(data.length);
      });
    }
  }

  ngOnDestroy() {
    if(this.subScription) this.subScription.unsubscribe();
  }

  openLeftSide = () => {
    this.isOpened = !this.isOpened;
    this.sidenav.toggle();
    console.log(typeof this.totalStudent + this.totalStudent);
  }

  closeLeftSide = () => {
    this.isOpened = false;
  }
}
