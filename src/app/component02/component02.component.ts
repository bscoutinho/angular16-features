import { Component, computed, signal, effect } from '@angular/core';

@Component({
  selector: 'app-component02',
  templateUrl: './component02.component.html',
  styleUrls: ['./component02.component.scss']
})

// SIGNALS Example - Person
export class Component02Component {
  
  // Define a signal for the loading state
  loading = signal(true);
  // Writable signals
  firstName = signal('John');
  lastName = signal('Doe');
  age = signal(30);

  // Computed signal to calculate the full name
  fullName = computed(() => `${this.firstName()} ${this.lastName()}`);

  // Computed signal to determine if the person is an adult
  isAdult = computed(() => this.age() >= 18);

  constructor() {
    // Effect to log the full name and adult status whenever any of the signals change
    effect(() => {
      console.log(`Full Name: ${this.fullName()}`);
      console.log(`Is Adult: ${this.isAdult()}`);
    });
  }
    
  ngOnInit() {
     // Update the loading signal to hide the spinner
     this.loading.set(false);
  }

  changeValues() {
    // Update the values of the writable signals
    this.firstName.set('Jane');
    this.lastName.set('Smith');
    this.age.set(15);
  }

  isLoading() {
    return this.loading();
  }
}
