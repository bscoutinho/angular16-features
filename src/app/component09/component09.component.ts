
import { Component, Injector, OnInit, computed, effect, signal } from '@angular/core';
import { SignalService } from '../signal.service';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-component09',
  templateUrl: './component09.component.html',
  styleUrls: ['./component09.component.scss']
})

// SIGNALS Example - several ways to create signals and use them
export class Component09Component implements OnInit {

  // writable signals
  protected exSignal01 = signal('Bruno');
  protected exSignal02 = signal({name: 'Bruno', age: 42});
  protected exSignal03 = signal(true);

  // computed signals
  protected exSignal04 = computed(() => {
    console.log('Passed through computed signal');
    
    if(this.exSignal03()) {
      return `${this.exSignal01()} Computed`
    } else {
      return 'NOTHING';
    }
  });

  protected exSignal05 = signal({});

  // convert signal to observable
  protected exSignal$ = toObservable(this.exSignal01);

  //conver observable to signal
  protected exSignal06 = toSignal(this.exSignal$);

  constructor(private injector: Injector, private signalService: SignalService) { 
    // effect: execute a function when the signal is changed | as useEffect (react)
    effect(() => {
      console.log('Effect signal 02: ', this.exSignal02());
    });

    effect(() => {
      console.log('Effect signal 02: ', this.exSignal05());
    });
  }

  ngOnInit() {
    // effect outside the constructor using injector
    effect(() => {
      console.log('Effect signal 03: ', this.exSignal03());
    }, {injector: this.injector});
  }

  setSignal() {
    // catch current value of signal
    console.log(this.exSignal01());

    // Set: Define un signal to a new absolute value
    this.exSignal01.set('Coutinho');
  }

  updateSignal() {
    // Update: Define the signal based on the current value. most used for primitive values
    this.exSignal02.update(atual => {
      return { ...atual, age: atual.age + 1}
    });
  }

  mutateSignal() {
    // Mutate: Define the signal based on the current value only the partial object
    this.exSignal02.mutate(atual => atual.name = 'Coutinho');
  }

  toggleSignal() {
    this.exSignal03.set(!this.exSignal03());
  }

  receiveSignal() {
    // get signal from service
    this.exSignal05.set(this.signalService.getCount());
  }

  sendSignal() {
    // set signal value in service
    this.signalService.setCount({name: 'Coutinho', age: 30});
  }

}
