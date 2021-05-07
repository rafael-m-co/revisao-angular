import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDarkBlue]'
})
export class DarkBlueDirective {

  constructor(private el: ElementRef) { 
    el.nativeElement.style.color = '#2b2a77';
  }

}
