import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormBuilder, FormControl, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { Person } from 'src/app/model/person.model';

@Component({
  selector: 'app-phones',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule],
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: PhonesComponent,
    multi: true
  }
  ]
})
export class PhonesComponent implements ControlValueAccessor, OnInit {

  phonesArray = this.formbuilder.array([]);
  chanegedCallBack: any;

  constructor(private readonly formbuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.phonesArray.valueChanges.subscribe(phones => {
      if (this.chanegedCallBack) {
        this.chanegedCallBack(phones);
      }
    });
  }

  removeItem(index: number) {
    this.phonesArray.removeAt(index);
  }

  addItem(){
    this.phonesArray.push(new FormControl<string>('ENTER NUMBER HERE'));
  }
  
  writeValue(obj: string[]): void {
    this.phonesArray.clear();
    for (let index = 0; index < obj.length; index++) {
      this.phonesArray.push(new FormControl<string>(''));
    }
    this.phonesArray.patchValue(obj);
  }

  registerOnChange(fn: any): void {
    this.chanegedCallBack = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
  }

}
