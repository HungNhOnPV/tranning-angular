import { Component, OnInit, AfterContentInit, AfterContentChecked, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-other-lifecycle',
  templateUrl: './other-lifecycle.component.html',
  styleUrls: ['./other-lifecycle.component.css']
})
export class OtherLifecycleComponent implements OnInit, AfterContentInit, AfterContentChecked {

  title: string = 'Other lifecycle';
  @ContentChild('value') value: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked: OtherLifecycleComponent');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit: OtherLifecycleComponent');
  }

}
