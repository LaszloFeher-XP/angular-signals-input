import {  Component, computed, signal } from '@angular/core';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatButtonModule, TodoItemComponent ],
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
