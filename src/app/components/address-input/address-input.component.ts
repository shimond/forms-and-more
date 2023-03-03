import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NG_VALIDATORS, ControlValueAccessor, FormBuilder, FormControl, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule, Validators, Validator, ValidationErrors, AbstractControl } from '@angular/forms';
import { filter } from 'rxjs';

@Component({
  selector: 'app-address-input',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    ReactiveFormsModule],
  templateUrl: './address-input.component.html',
  styleUrls: ['./address-input.component.scss'],
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: AddressInputComponent,
      multi: true
    },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: AddressInputComponent,
      multi: true
    }
  ]
})
export class AddressInputComponent implements ControlValueAccessor, Validator, OnInit {

  readonly addressForm = this.formBuilder.group({
    street: new FormControl<string>('', [Validators.required]),
    city: new FormControl<string>(''),
    country: new FormControl<string>(''),
  })
  chanegedCallback: any;

  constructor(private readonly formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addressForm.valueChanges
      //.pipe(filter(x => this.addressForm.valid))
      .subscribe(currentAddressValue => {
        if (this.chanegedCallback) {
          this.chanegedCallback(currentAddressValue);
        }
      })
  }

  validate(control: AbstractControl): ValidationErrors | null {

    if (this.addressForm.valid) { return null };
    return {
      'addressNotValid':'Error message'
    };

  }

  writeValue(obj: any): void {
    this.addressForm.patchValue(obj);
  }

  registerOnChange(fn: any): void {
    this.chanegedCallback = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
  }



}
