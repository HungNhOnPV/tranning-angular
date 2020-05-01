import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServerHttpService } from 'src/app/services/serverHttp.service';
import { Student } from 'src/app/models/students';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit, OnDestroy {

  students: Student[] = [];
  subscription: Subscription;

  constructor(
    private common: CommonService,
    private serverHttp: ServerHttpService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.subscription = this.serverHttp.getStudents().subscribe(data => {
      this.students = data;
      this.common.setTotalStudent(data.length);
    });
  }

  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  addStudent = () => {
    this.router.navigate(['student-form', 0]);
  }

  searchIndex = id => {
    let index = -1;
    this.students.forEach((student, index) => {
      if(student.id === id) return index;
    });
    return index;
  }

  onDeleteStudent = id => {
    this.subscription = this.serverHttp.deleteStudent(id).subscribe(data => {
      this.students.splice(this.searchIndex(id), 1);
      this.common.setTotalStudent(this.students.length);
    });
  }

  onEditStudent = (id) => {
    this.router.navigate(['student-form', id]);
  }

}
