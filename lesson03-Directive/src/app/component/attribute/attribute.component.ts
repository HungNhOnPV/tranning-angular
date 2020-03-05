import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent implements OnInit {

  isSpecial: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  setClasses = () => {
    return {
      'border-blue': this.isSpecial,
      'pd-10': this.isSpecial,
      'cl-red': this.isSpecial,
      'border-yellow': !this.isSpecial
    }
  }

}
