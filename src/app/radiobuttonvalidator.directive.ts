import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appRadiobuttonvalidator][ngModel]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting:RadiobuttonvalidatorDirective,
    multi: true
  }]
})
export class RadiobuttonvalidatorDirective implements Validator {

  constructor() { }
  validate(control: FormControl) : {[key: string]: any} | null {
    if (control.value==''){
      return {'radiobuttonInvalid': true };
   }
    return null;  
  }

}
