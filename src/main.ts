import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RequiredComponent } from './required.component';
import { ChildComponent } from './child.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RequiredComponent, ReactiveFormsModule, ChildComponent],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <form [formGroup]="group">
    <input type='text' formControlName='text' />
    <child [group]="group" name="validity" />
    <required [value]="isValid" [group]="group"/>
    VALIDITY: {{ group.status }}
    <button (click)="clickMe()">Toggle Validity</button>
</form>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
  `,
})
export class App {
  name = 'Angular';
  group = new FormGroup({
    text: new FormControl(''),
    validity: new FormControl(false),
  });
  isValid = true;

  clickMe() {
    console.log('CLICK');
    this.isValid = !this.isValid;
  }
}

bootstrapApplication(App);
