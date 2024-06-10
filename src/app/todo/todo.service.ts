import { Injectable, Signal } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoModel } from './models/todo-model';
import { todoList } from './mocks/todo-mock';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  getTodos$(): Observable<TodoModel[]>{
    const todos$ = new Observable<TodoModel[]>(subscriber => {
      setTimeout(() => subscriber.next(todoList), 1000);
    })
    // console.log(todos$.pipe(tap({next: value=>console.log(value)})).subscribe(data=>console.log(data)));
    return todos$;
  }

  getTodosSignal(): Signal<TodoModel[]>{
    const todos$ = new Observable<TodoModel[]>(subscriber => {
      subscriber.next(todoList);
    })
    const todos = toSignal<TodoModel[], TodoModel[]>(todos$, { initialValue: [] });  
    return todos;
  }

    
}
