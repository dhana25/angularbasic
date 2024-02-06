import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAlldirc]'
})
export class AlldircDirective {
  bgColor = "cyan";
  constructor(private e1:ElementRef,private render:Renderer2) { 
    //this.e1.nativeElement.style.backgroundColor = 'green'
  }

  @HostBinding('style.color') textColor = 'red';
  @HostBinding('style.margin') space = '50px';

  @HostListener('mouseenter') onEnter () {
    this.colorChange(this.bgColor)
  }
  
  
  @HostListener('mouseleave') onLeave () {
    this.colorChange('white')
  } 

  colorChange(clr:any) {
    this.render.setStyle(this.e1.nativeElement,'backgroundColor',clr)
  }

}
