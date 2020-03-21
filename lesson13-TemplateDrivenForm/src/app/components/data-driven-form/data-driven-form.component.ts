import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
  selector: "app-data-driven-form",
  templateUrl: "./data-driven-form.component.html",
  styleUrls: ["./data-driven-form.component.css"]
})
export class DataDrivenFormComponent implements OnInit, OnDestroy {
  frmUser: FormGroup;
  subscription: Subscription;

  constructor(private _formBuilderService: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  createForm = () => {
    this.frmUser = this._formBuilderService.group({
      username: [
        "",
        [Validators.required, Validators.minLength(5), Validators.maxLength(20)]
      ],
      password: [
        "",
        [Validators.required, Validators.minLength(5), Validators.maxLength(20)]
      ],
      fullname: [
        "",
        [Validators.required, Validators.minLength(5), Validators.maxLength(20)]
      ],
      email: [
        "",
        Validators.pattern(
          "[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
        )
      ],
      phone: [""]
    });

    this.subscription = this.frmUser.valueChanges.subscribe(data => {
      console.log(data);
    });
  };

  onSubmitForm = () => {
    console.log(this.frmUser);
  };

  onResetForm = () => {
    this.frmUser.reset();
  };
}
