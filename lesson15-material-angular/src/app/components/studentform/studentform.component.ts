import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ServerHttpService } from 'src/app/services/serverHttp.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/models/students';

@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.scss'],
})
export class StudentformComponent implements OnInit, OnDestroy {
  studentForm = new FormGroup({
    code: new FormControl(''),
    gender: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    dob: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
  });

  subscription: Subscription;
  id: string;

  constructor(
    private serverHttp: ServerHttpService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.loadData();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe;
    }
  }

  loadData = () => {
    this.subscription = this.serverHttp
      .getStudent(this.route.snapshot.paramMap.get('id'))
      .subscribe((data) => {
        for (const controlName in this.studentForm.controls) {
          if (controlName)
            this.studentForm.controls[controlName].setValue(data[controlName]);
        }
      });
  };

  handleEdit = () => {
    this.studentForm.addControl('id', new FormControl(this.route.snapshot.paramMap.get('id')));
    this.subscription = this.serverHttp
      .editStudent(this.studentForm.value)
      .subscribe(data => {
        this.router.navigate(['students']);
      });
  };

  handleAdd = () => {
    this.subscription = this.serverHttp
      .addStudent(this.studentForm.value)
      .subscribe((data) => {
        this.router.navigate(['students']);
      });
  };
}
