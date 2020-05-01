import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  totalStudent$ = new BehaviorSubject<number>(0);

  constructor() { }

  setTotalStudent = (data: number) => {
    this.totalStudent$.next(data);
  }
}
