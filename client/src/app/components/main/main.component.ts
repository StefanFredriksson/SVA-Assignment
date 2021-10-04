import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { TodoService } from '../../services/todo.service';
import { User } from '../../models/User';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  users: User[] = [];
  todos: Todo[] = [];
  constructor(
    private userService: UserService,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users.map((user) => {
        return { id: user.id, name: user.name };
      });
    });
  }

  updateTodos(id: any) {
    this.todoService.getTodos(id).subscribe((todos) => {
      this.todos = todos.map((todo) => {
        return { title: todo.title, completed: todo.completed };
      });
    });
  }
}
