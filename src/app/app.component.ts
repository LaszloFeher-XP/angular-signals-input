import {  Component, computed, signal } from '@angular/core';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';
import { MatButtonModule } from '@angular/material/button';
import { TodoListComponent } from './todo/todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatButtonModule, TodoItemComponent, TodoListComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  todoOneComplete = signal(false);
  todoTwoComplete = signal(false);
  todoThreeComplete = signal(false); 

  everyTodoIscompleted = computed(() => {
    return this.todoOneComplete() && this.todoTwoComplete() && this.todoThreeComplete()
  })
}
