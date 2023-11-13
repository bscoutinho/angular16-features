import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-component07',
  templateUrl: './component07.component.html',
  styleUrls: ['./component07.component.scss']
})

// SIGNALS Example - Form Group
export class Component07Component {

  profileForm: FormGroup = this.fb.group({
    firstName: [''],
    lastName: ['']
  });
  
  firstNameSignal = toSignal(this.profileForm.get('firstName')!.valueChanges, {initialValue: ''});

  constructor(private fb: FormBuilder) {}

}