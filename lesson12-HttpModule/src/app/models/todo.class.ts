export class Todo {
  id: number;
  title: string;
  completed: boolean;

  constructor(title: string, completed: boolean){
    this.title = title;
    this.completed = completed;
  }
}
