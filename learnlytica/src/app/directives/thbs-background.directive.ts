import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appThbsBackground]'
})
export class ThbsBackgroundDirective {

  constructor(private myelem:ElementRef) {
    this.myelem.nativeElement.style.backgroundColor='green';
    this.myelem.nativeElement.innerHTML='rao ';
   }
   @HostListener('mouseenter')
    onmouseenter()
    {
      this.myelem.nativeElement.style.fontSize='50px';
    }

    @HostListener('mouseleave')
    onMouseLeave(){
      this.myelem.nativeElement.style.fontSize='25px';
    }

    @HostListener('dblclick')
    onMouseDoubleClick()
    {
      this.myelem.nativeElement.style.color='red';

    }
    @HostListener('click')
    onMouseClick()
    {
      this.myelem.nativeElement.style.color='white';
    }
}
