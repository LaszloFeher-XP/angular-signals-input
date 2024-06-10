import { Component, DestroyRef, inject, signal } from '@angular/core';
import { TodoService } from '../todo.service';
import { TodoModel } from '../models/todo-model';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent{
  todoService = inject(TodoService);
  destroyRef = inject(DestroyRef)
  todos = signal<TodoModel[]>([]);

  constructor() {
    this.todoService.getTodos$()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(data => this.todos.set(data));
  }
}
