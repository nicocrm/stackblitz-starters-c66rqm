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
  selector: 'child',
  standalone: true,
  template: '<div [formGroup]="group"></div>',
})
export class RequiredComponent implements OnInit {
  @Input() group!: FormGroup;
  private fc?: FormControl;
  @Input() name!: string;
  

  ngOnInit() {
    this.fc = <FormControl>this.group.get(this.name);
  }

  ngOnDestroy(): void {}
}
