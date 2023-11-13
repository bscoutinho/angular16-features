import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';

@Component({
  selector: 'on-push-teste',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <p>OnPushComponent valor: {{ valor() }}</p>
  `
})

// INPUT REQUIRED Example - input required
export class OnPushTesteComponent {
  @Input({required:true}) message = '';
  valor = signal(1);

  constructor() {
    setInterval(() => {
      this.valor.update(atual => atual + 1)
      console.log('onPush Value: ', this.valor());
    }, 10000);
  }
}
