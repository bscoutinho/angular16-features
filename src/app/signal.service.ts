import { Injectable, effect, signal, DestroyRef, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalService {

  //destroyRef Example
  destroyRef = inject(DestroyRef);

  private signalObj = signal({name: 'Bruno', age: 42});

  constructor() { 
    effect(() => {
      console.log('Effect signalObj from mservice: ', this.signalObj());
    });
  }

  getCount() {
    return this.signalObj();
  };

  setCount(value: { name: string; age: number; }) {
    this.signalObj.set(value);
  }

  destroy() {
    this.destroyRef.onDestroy(() => console.log('destroyRef ang16 feature') );
  }
}
