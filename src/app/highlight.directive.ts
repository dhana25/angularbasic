import { Directive,ElementRef,Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  host : {
    '(click)' : 'applyLogic()'
  }
})
export class HighlightDirective {

  @Input() cNum: number = 0;
  @Input() divisible : number = 1;
  constructor(private e1:ElementRef) { }

  applyLogic() {
    if(this.cNum % this.divisible !== 0) {
      this.e1.nativeElement.style.color = 'red';
    }
    else {
      this.e1.nativeElement.style.color = 'green';
    }
  }

}
