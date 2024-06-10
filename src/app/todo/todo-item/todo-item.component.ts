import { Component, HostBinding, ViewEncapsulation, effect, input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [MatCardModule],  
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  isCompleted = input(false);
  @HostBinding('class.complete') completeClass = false;

  constructor() {
    effect(() => this.completeClass = this.isCompleted());
  }
}
