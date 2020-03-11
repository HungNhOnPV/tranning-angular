import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hook',
  templateUrl: './lifecycle-hook.component.html',
  styleUrls: ['./lifecycle-hook.component.css']
})
export class LifecycleHookComponent implements OnInit, OnChanges, OnDestroy {

  constructor() {
    console.log('constructor: LifecycleHookComponent');
   }

  ngOnInit(): void {
    console.log('ngOnInit: LifecycleHookComponent');
  }

  ngOnChanges(): void {
    console.log('ngOnChanges: LifecycleHookComponent');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy: LifecycleHookComponent');
  }

}
