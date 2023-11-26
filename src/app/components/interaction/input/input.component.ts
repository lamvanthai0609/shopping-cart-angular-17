import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormControl, FormGroup, FormsModule, NG_VALIDATORS, NG_VALUE_ACCESSOR, ReactiveFormsModule, ValidationErrors, Validator } from '@angular/forms';
import { ErrorMessages } from '@/util/validation';


@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule,FormsModule, ReactiveFormsModule],
  providers:[{
    provide:NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true
  },
  { 
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => InputComponent),
    multi: true
  }
],
  templateUrl: './input.component.html',
})



export class InputComponent implements ControlValueAccessor ,Validator {
  @Input() formControlName! : string;
  @Input() type : string = "text";
  @Input() placeholder : string = "";
  @Input() error : string = "";
  form!: FormGroup;
  value :string = "";
  errorMessages  = ErrorMessages;
  onChange!: (value: any) => void;
  onTouched!: () => void;
  errors! : ValidationErrors | null

  writeValue(value: string) {
    if (value !== undefined) {
      this.value = value
    }
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
  validate(c: FormControl) {
    this.errors = c.errors;
    return c.errors
  }
  handleOnChange(e:any){
    this.writeValue(e.target.value);
    this.onChange(e.target.value);
  }
}
