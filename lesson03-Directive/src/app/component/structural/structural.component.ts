import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent implements OnInit {

  isShow: boolean = false;
  userName: string = 'Pham Viet Hung';
  isChecked: boolean = true;
  age: number;

  constructor() { }

  ngOnInit(): void {
  }

  onChange = value => {
    this.isChecked = value;
  }

}
