import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightQuote]'
})
export class HighlightQuoteDirective {


  constructor(private elem:ElementRef){}

  @HostListener("click") addTotal(){
    this.highlight("highlight");
  }
  private highlight(action:string){
    this.elem.nativeElement.style.backgroundColor = 'blue';
  }

  }



