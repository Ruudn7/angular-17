import { Component, WritableSignal, signal } from '@angular/core';

@Component({
  selector: 'app-signal-todo-list',
  standalone: true,
  imports: [],
  templateUrl: './signal-todo-list.component.html',
  styleUrl: './signal-todo-list.component.scss'
})
export class SignalTodoListComponent {

  todoName = '';
  todos: WritableSignal<string[]> = signal([]);

  addTodo(todo: HTMLInputElement): void {
    this.todos.update((list) => [...list, todo.value]);
    todo.value = '';
  }

  remove(item: string): void {
    this.todos.update((list) => list.filter(el => el !== item));
  }

}
