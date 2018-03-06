import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() color: string
  constructor(private el: ElementRef) { 

   
  }

  @HostListener('mouseenter') onmouseenter() {
    this.el.nativeElement.style.backgroundColor = this.color
  }

  @HostListener('mouseleave') onmouseleave() {
    this.el.nativeElement.style.backgroundColor = null
  }
}
