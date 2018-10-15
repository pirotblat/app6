import { TodoItem } from './models/todo-item';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError, take, switchMap, throttle } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  //_baseUrl = 'http://localhost:5000/api/';
  _baseUrl = 'http://localhost:52486/api/';
  selectedTodo: TodoItem;
  todoList: TodoItem[];

  constructor(private http: HttpClient) { }
  getTodos() {
    this.todoList = [];
    this.http.get<any[]>(this._baseUrl + 'todos')
    .pipe(
      map(data => {
         //console.log(data);
         return data;
       }),
      catchError(error => {
        console.log(error);
        return this.errorHandler(error);
      })
    )
    .subscribe(t => {
      //console.log(t);
      this.todoList = t;
    });
  }

  /** PUT: update a new todo to the server */
  updateTodo (todo: TodoItem): Observable<TodoItem> {
    //console.log(todo);
    return this.http.put<TodoItem>(this._baseUrl  + 'todos/' + todo.id, todo, httpOptions).pipe(
      catchError(error => {
        return this.errorHandler(error);
      })
    );
  }

  /** POST: update a new todo to the server */
  addTodo (todo: TodoItem): Observable<TodoItem> {
    //console.log(todo);
    todo.id = 0;
    return this.http.post<TodoItem>(this._baseUrl  + 'todos', todo, httpOptions).pipe(
      catchError(error => {
        return this.errorHandler(error);
      })
    );
  }

  /** DELETE: delete the todo from the server */
  deleteTodo (todo: TodoItem | number): Observable<TodoItem> {
    const id = typeof todo === 'number' ? todo : todo.id;
    const url = `${this._baseUrl}todos/${id}`;

    return this.http.delete<TodoItem>(url, httpOptions).pipe(
      catchError(error => {
        return this.errorHandler(error);
      })
    );
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
