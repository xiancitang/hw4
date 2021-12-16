import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[CheckboxvalidatorDirective]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting:CheckboxvalidatorDirective ,
    multi: true
  }]
})
export class CheckboxvalidatorDirective implements Validator {
  checkboxtrue:Array<boolean> = [];

  likes: Array<string> = [];
  likesgmu:string='';

  constructor() { }

  validate(control: FormControl) : {[key: string]: any} | null {

    if(control.value==true)
    {this.checkboxtrue.push(control.value);}
    else if(control.value==false) {
      this.checkboxtrue.pop();
  } 
   if(this.checkboxtrue.length<2){			 
      return {'checkboxInvalid': true };
  }
  return null;  
}

}
