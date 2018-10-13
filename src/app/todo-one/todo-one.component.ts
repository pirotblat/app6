import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todo-one',
  templateUrl: './todo-one.component.html',
  styleUrls: ['./todo-one.component.css']
})
export class TodoOneComponent implements OnInit {

  constructor(public srv: TodoService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if(form)
      form.reset();
    this.srv.selectedTodo = {
      id: null,
      title: '',
      description: '',
      completed: false,
      entered: new Date()
    };
  }

  onSubmit(todoForm: NgForm) {
    const title = todoForm.value.title;
    if (todoForm.value.id) {
      //update
      this.srv.updateTodo(todoForm.value)
      .subscribe(data => {
        this.resetForm(todoForm);
        this.srv.getTodos();
        this.toastr.success('Update todo: ' + title, 'Todo item');
      });
      } else {
      //add
      this.srv.addTodo(todoForm.value)
      .subscribe(data => {
        this.resetForm(todoForm);
        this.srv.getTodos();
        this.toastr.success('Add todo: ' + title, 'Todo item');
      });
      }
    //console.log(todoForm.value);
  }

}
