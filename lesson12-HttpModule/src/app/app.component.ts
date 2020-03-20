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
  todo: Todo = null;
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

  onEditTodo = (item: Todo) => {
    this.todo = item;
  };

  onUpdateTodo = () => {
    this.subscription = this._todoService.updateTodo(this.todo).subscribe(
      data => {
        let index = this.getIndex(this.todo.id);
        this.todos[index] = data;
        this.todo = null;
      },
      error => {
        this._todoService.handleError(error);
      }
    );
  };

  onDeleteTodo = (id: number) => {
    this.subscription = this._todoService.deleteTodo(id).subscribe(
      data => {
        let index = this.getIndex(id);
        this.todos.splice(index, 1);
      },
      error => {
        this._todoService.handleError(error);
      }
    );
  };

  getIndex = (id: number) => {
    let result = -1;
    this.todos.forEach((todo, index) => {
      if (todo.id === id) {
        result = index;
      }
    });
    return result;
  };
}
