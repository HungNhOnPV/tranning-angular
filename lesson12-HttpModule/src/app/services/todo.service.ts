import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.class';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  API: string = 'http://localhost:3000/todos';
  todos: Todo[] = [];

  constructor(
    private _http: HttpClient
  ) { }

  getAllTodos(): Observable<Todo[]> {
    return this._http.get<Todo[]>(this.API);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this._http.post<Todo>(this.API, todo);
  }

  updateTodo(todo: Todo): Observable<Todo> {
    return this._http.put<Todo>(`${this.API}/${todo.id}`, todo);
  }

  deleteTodo(id: number): Observable<Todo> {
    return this._http.delete<Todo>(`${this.API}/${id}`);
  }

  handleError = err => {
    if(err.error instanceof Error) {
      console.log(`Client-side error: ${err.error.message}`);
    } else {
      console.log(`Server-side error: ${err.status} - ${err.error}`);
    }
  }
}
