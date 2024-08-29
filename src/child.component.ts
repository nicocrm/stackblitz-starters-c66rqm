import {
  ChangeDetectorRef,
  Component,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { RequiredComponent } from './required.component';

@Component({
  selector: 'child',
  standalone: true,
  imports: [
    ReactiveFormsModule, RequiredComponent
  ],
  template: `<div [formGroup]="group">
  <required [group]="group" [value]="isValid" />
  <button (click)="click()">CLICK TO TOGGLE (2)</button>
  </div>`,
})
export class ChildComponent implements OnInit {
  @Input() group!: FormGroup;
  private fc?: FormControl;
  @Input() name!: string;
  isValid = false;
  

  ngOnInit() {
    this.fc = <FormControl>this.group.get(this.name);
  }

  ngOnDestroy(): void {}

  click() {
    this.isValid = !this.isValid;
  }
}
