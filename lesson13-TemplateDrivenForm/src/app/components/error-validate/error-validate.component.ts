import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-error-validate",
  templateUrl: "./error-validate.component.html",
  styleUrls: ["./error-validate.component.css"]
})
export class ErrorValidateComponent implements OnInit {
  @Input() control;
  @Input() nameControl;

  constructor() {}

  ngOnInit(): void {}

  get message() {
    for (let err in this.control.errors) {
      if (this.control.dirty) {
        return this.getErrorMessage(err, this.control.errors[err]);
      }
    }
  }

  getErrorMessage = (err, value) => {
    let messages = {
      required: `${this.nameControl} is required`,
      minlength: `MinLength: ${value.requiredLength} character`,
      maxlength: `MaxLength: ${value.requiredLength} character`,
      pattern: `${this.nameControl} invalid !`
    };
    return messages[err];
  };
}
