import { TodoItem } from './../models/todo-item';
import { TodoService } from './../todo.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(public srv: TodoService, private toastr: ToastrService) { }

  ngOnInit() {
    this.srv.getTodos();
  }

  editTodo(todo: TodoItem) {
    todo.completed = true;
    this.srv.selectedTodo = Object.assign({}, todo);
  }

  deleteTodo(todo: TodoItem) {
    if (confirm('Are you sure to delete?') == true) {
      const title = todo.title;
      this.srv.deleteTodo(todo).subscribe(() => this.srv.getTodos());
      this.toastr.warning('Deleted todo: ' + title, 'Todo item');
    }
  }

}
