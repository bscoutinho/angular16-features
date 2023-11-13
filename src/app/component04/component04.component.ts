import { Component, signal, computed, effect } from "@angular/core";

@Component({
  selector: 'app-component04',
  templateUrl: './component04.component.html',
  styleUrls: ['./component04.component.scss']
})

// SIGNALS Example - Todo List
export class Component04Component {

  // Writable signals
  todos = [
    { id: 1, title: 'Buy groceries', completed: false },
    { id: 2, title: 'Do laundry', completed: true },
    { id: 3, title: 'Walk the dog', completed: false }
  ]; // List of todos

  todoList = signal(this.todos);

  showCompleted = signal(false); // Flag indicating whether completed todos should be shown

  // Computed signal to filter and sort todos based on the showCompleted flag
  filteredTodos = computed(() => {
    const filtered = this.todoList().filter((todo: { completed: any; }) => this.showCompleted() || !todo.completed);
    return filtered.sort((a: { id: number; }, b: { id: number; }) => a.id - b.id);
  });

  // Computed signal to count the number of remaining todos
  remainingTodosCount = computed(() =>
    this.todoList().reduce((count: number, todo: { completed: any; }) => (todo.completed ? count : count + 1), 0)
  );

  constructor() { 
    // Effect to log the filtered todos and remaining count whenever they change
    effect(() => {
      console.log('Filtered Todos:');
      console.log(this.filteredTodos());
      console.log(`Remaining Todos: ${this.remainingTodosCount()}`);
    });

  }

  addTodo() {
    // Add a new todo
    this.todoList.mutate((value: any) => {
      value.push({ id: value.length + 1, title: `Todo ${value.length + 1}`, completed: false });
    });
  }

  removeTodo(item: any) {
    // Remove the selected item from the itemList signal
    this.todoList.set(this.todoList().filter((i) => i !== item));
  }

  toggleCompleted() { 
    // Update the showCompleted flag
    this.showCompleted.set(!this.showCompleted());
  }



}
