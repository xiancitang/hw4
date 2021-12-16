import { Directive } from '@angular/core';
import {FormControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appDatavalidator][ngModel]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting:DatavalidatorDirective,
    multi: true
  }]
})
export class DatavalidatorDirective implements Validator{

  constructor() { }

  validate(control: FormControl) : {[key: string]: any} | null {

    let numbers=(control.value).split(",");
   for(var i=0;i<numbers.length;i++){			 
        if(parseInt(numbers[i])>100 || parseInt(numbers[i])<1){ 
          return {'dataInvalid': true };
        }	
    }
    return null;  
  }

}

