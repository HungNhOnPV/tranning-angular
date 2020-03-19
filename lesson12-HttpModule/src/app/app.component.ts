import { Component, OnInit, OnDestroy } from "@angular/core";
import { TodoService } from "./services/todo.service";
import { Subscription } from "rxjs";
import { Todo } from "./models/todo.class";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  todos: Todo[] = [];
  title: string;
  value: number = 0;

  constructor(private _todoService: TodoService) {}

  ngOnInit(): void {
    this.loadData();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  loadData = () => {
    this.subscription = this._todoService.getAllTodos().subscribe(
      data => {
        this.todos = data;
      },
      error => {
        this._todoService.handleError(error);
      }
    );
  };

  onAddTodo = () => {
    let completed: boolean = false;
    if (this.value == 1) {
      completed = true;
    }
    let todo = new Todo(this.title, completed);
    this.subscription = this._todoService.addTodo(todo).subscribe(
      data => {
        this.todos.push(data);
      },
      error => {
        this._todoService.handleError(error);
      }
    );
  };
}
