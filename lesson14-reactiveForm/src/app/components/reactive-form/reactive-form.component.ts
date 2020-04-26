import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  // name = new FormControl('');
  profileForm = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }

  // onUpdateName = () => {
  //   this.name.setValue('Phạm Việt Hưng');
  // }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.profileForm.value.name);
  }

}
