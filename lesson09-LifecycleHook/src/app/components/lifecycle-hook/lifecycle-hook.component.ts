import {
  Component,
  OnInit,
  OnChanges,
  OnDestroy,
  Input,
  SimpleChanges,
  DoCheck
} from "@angular/core";

@Component({
  selector: "app-lifecycle-hook",
  templateUrl: "./lifecycle-hook.component.html",
  styleUrls: ["./lifecycle-hook.component.css"]
})
export class LifecycleHookComponent
  implements OnInit, OnChanges, OnDestroy, DoCheck {
  @Input() total: number = 0;

  title: string = "LifecycleHook Component";
  previousTotal: number;

  constructor() {
    // console.log("constructor: LifecycleHookComponent");
  }

  ngOnInit(): void {
    // console.log("ngOnInit: LifecycleHookComponent");
  }

  ngOnChanges(simpleChanges: SimpleChanges): void {
    // console.log("ngOnChanges: LifecycleHookComponent");
    this.previousTotal = simpleChanges.total.previousValue;
  }

  ngOnDestroy(): void {
    // console.log("ngOnDestroy: LifecycleHookComponent");
  }

  ngDoCheck(): void {
    // console.log('ngDoCheck: LifecycleHookComponent');
  }
}
