import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-lifecycle',
  templateUrl: './other-lifecycle.component.html',
  styleUrls: ['./other-lifecycle.component.css']
})
export class OtherLifecycleComponent implements OnInit {

  title: string = 'Other lifecycle';

  constructor() { }

  ngOnInit(): void {
  }

}
