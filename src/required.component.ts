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
  ValidationErrors,
} from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'required',
  standalone: true,
  template: '<div></div>',
})
export class RequiredComponent implements OnInit, OnChanges {
  @Input() group!: FormGroup;
  @Input() value: any;
  @Input() uniqueName!: string;

  private fc = new FormControl();

  ngOnInit() {
    console.log("Required Init")
    this.uniqueName = this.uniqueName
      ? this.uniqueName
      : Math.random().toString();
    this.uniqueName = `$$${this.uniqueName}`;
    this.fc.setValidators(this.customValidation);
    this.group?.addControl(this.uniqueName, this.fc);
  }

  ngOnDestroy(): void {}

  ngOnChanges(changes: SimpleChanges) {
    console.log("VALUE: ", this.value)
    if (changes['value']) {
      this.updateValidity();
    }
  }

  updateValidity() {
    if (this.value !== this.fc.value) {
      this.fc.setValue(this.value, { emitEvent: false });
      this.fc.updateValueAndValidity();
    }
  }

  customValidation() {
    if(this.value) {
      return null;
    }
    return {
      [this.uniqueName]: 'required'
    }
  }
}
