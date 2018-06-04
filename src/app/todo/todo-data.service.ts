import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Http, Response } from '@angular/http';

@Injectable()
export class TodoDataService {

  lastId = this.getAllTodos.length;

  constructor(private http: Http) {
  }

  // Simulate POST /todos
  addTodo(todo: Todo): Observable<Todo> {
    if (!todo.id) {
      todo.id = this.lastId + 1;
      this.lastId = this.lastId + 1;
      console.log(todo.id, ' : new todo id');
    }

    return this.http
      .post('http://localhost:3000/todo', todo)
      .map(response => {
        const td = new Todo(response.json());
        console.log('todo from the server: ', td.id, ' ', td.title );
        return td;
      })
      .catch(this.handleError);

  }

  // Simulate DELETE /todos/:id
  deleteTodoById(todoId: number): Observable<null> {
    return this.http
      .delete('http://localhost:3000/todo/' + todoId)
      .map(response => null)
      .catch(this.handleError);
  }

  // Simulate PUT /todos/:id
  updateTodo(todo: Todo): Observable<Todo> {
    return this.http
      .put('http://localhost:3000/todo/' + todo.id, todo)
      .map(response => {
        return new Todo(response.json());
      })
      .catch(this.handleError);
  }


  // Simulate GET /todos
  getAllTodos(): Observable<Todo[]> {
    return this.http
      .get('http://localhost:3000/todo-route')
      .map(response => {
        const todos = response.json();
        return todos.map((todo) => new Todo(todo));
      })
      .catch(this.handleError);
  }

  // Simulate GET /todos/:id
  getTodoById(todoId: number): Observable<Todo> {
    return this.http
      .get('http://localhost:3000/todo' + todoId)
      .map(response => {
        return new Todo(response.json());
      })
      .catch(this.handleError);
  }

  // Toggle todo complete
  toggleTodoComplete(todo: Todo) {
    todo.complete = !todo.complete;
    return this.updateTodo(todo);
  }

  private handleError(error: Response | any) {
    console.error('handleError', error);
    return Observable.throw(error);
  }
}
