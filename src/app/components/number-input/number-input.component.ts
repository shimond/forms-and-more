import { CommonModule } from '@angular/common';
import { isIdentifier } from '@angular/compiler';
import { Component } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-number-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,     
      useExisting: NumberInputComponent,
      multi: true
    }
  ]
})
export class NumberInputComponent implements ControlValueAccessor {

  currentValue = 0;
  disabled = false;
  changedCallback: any;

  raiseEvent(){
    if(this.changedCallback){
      this.changedCallback(this.currentValue);
    }
  }
  plus() {
    this.currentValue++;
    this.raiseEvent();
  }

  minus() {
    this.currentValue--;
    this.raiseEvent();
  }

  writeValue(obj: any): void {
    this.currentValue = obj;
  }

  registerOnChange(fn: any): void {
    this.changedCallback = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }


}
