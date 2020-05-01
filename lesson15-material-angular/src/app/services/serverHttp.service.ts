import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Student } from '../models/students';

@Injectable({
  providedIn: 'root'
})
export class ServerHttpService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  REST_API_SERVER = "http://localhost:3000";

  getStudents () : Observable<Student[]> {
    const url = `${this.REST_API_SERVER}/students`;
    return this.http.get<Student[]>(url, this.httpOptions)
    .pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  getStudent (id: string) : Observable<Student> {
    const url = `${this.REST_API_SERVER}/students/${id}`;
    return this.http.get<Student>(url, this.httpOptions)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  addStudent (data: Student) : Observable<Student> {
    const url = `${this.REST_API_SERVER}/students`;
    return this.http.post<Student>(url, data, this.httpOptions)
    .pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  deleteStudent (id: string) : Observable<Student> {
    const url = `${this.REST_API_SERVER}/students/${id}`;
    return this.http.delete<Student>(url, this.httpOptions)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  editStudent (data: Student): Observable<Student> {
    const url = `${this.REST_API_SERVER}/students/${data.id}`;
    return this.http.put<Student>(url, data, this.httpOptions)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
