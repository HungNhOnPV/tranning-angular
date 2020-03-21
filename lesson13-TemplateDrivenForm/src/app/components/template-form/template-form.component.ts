import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.class';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  user: User;

  constructor() { }

  ngOnInit(): void {
    this.user = new User();
  }

  onSubmitForm = (formUser: NgForm) => {
    if(formUser.valid) {
      console.log(formUser.value);
    }
  }

  onResetForm = (formUser: NgForm) => {
    formUser.reset();
  }
}
