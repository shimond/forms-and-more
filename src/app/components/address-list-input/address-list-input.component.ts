import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { Address } from 'src/app/model/person.model';
import { AddressInputComponent } from '../address-input/address-input.component';

@Component({
  selector: 'app-address-list-input',
  templateUrl: './address-list-input.component.html',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AddressInputComponent],
  styleUrls: ['./address-list-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: AddressListInputComponent,
    multi: true
  }]
})
export class AddressListInputComponent implements OnInit,  ControlValueAccessor {

  addressArray = this.formBuilder.array([]);

  registerOnChangeCallback: any;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.addressArray.valueChanges.subscribe(addressList=>{
      if(this.registerOnChangeCallback){
        this.registerOnChangeCallback(addressList);
      }
    });
  }

  removeItem(index: number) {
    this.addressArray.removeAt(index);
  }

  addItem() {
    this.addressArray.push(new FormControl<Address | null>(null));
  }


  writeValue(address: Address[]): void {
    if(!address)
    {
      return;
    }

    this.addressArray.clear();
    for (let index = 0; index < address.length; index++) {
        //this.addressArray.controls.push(new FormControl<Address| null>(null));
        this.addItem();
    }
    this.addressArray.patchValue(address);
  }

  registerOnChange(fn: any): void {
    this.registerOnChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {

  }

  setDisabledState?(isDisabled: boolean): void {

  }

}
