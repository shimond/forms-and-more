import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Address, Person } from '../model/person.model';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NumberInputComponent } from './number-input/number-input.component';
import { AddressInputComponent } from './address-input/address-input.component';
import { PhonesComponent } from './phones/phones.component';
import { AddressListInputComponent } from './address-list-input/address-list-input.component';

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [
    CommonModule,
    NumberInputComponent,
    AddressInputComponent,
    AddressListInputComponent,
    PhonesComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {

  p: Person = {
    phones: ['054666666', '0542222222'],
    id: 1, name: 'David Cohen', age: 87,
    homeAddress: { city: 'Jerusalem', street: 'Hanegbi', country: 'Israel' },
    workAddress: { city: 'Eilat', street: 'Hamagen', country: 'Israel' },
    moreAddresses:[
      { city: 'Tel-aviv', street: 'Hamasger', country: 'Israel' },
      { city: 'Elad', street: 'Haadmor-Hasheni', country: 'Israel' },
    ]
  };

  readonly myForm = this.formBuilder.group({
    id: new FormControl<number>(-1),
    name: new FormControl<string>('', [Validators.required]),
    age: new FormControl<number>(18),
    phones: new FormControl<string[]>([]),
    homeAddress: new FormControl<Address | null>(null),
    workAddress: new FormControl<Address | null>(null),
    moreAddresses: new FormControl<Address[]>([])
  });

  constructor(private readonly formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.myForm.patchValue(this.p);
    this.myForm.controls.age.disable();
  }

}
