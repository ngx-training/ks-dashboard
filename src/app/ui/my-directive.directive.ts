import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  @Input() appMyDirective = 'inline';
  @Input() backgroundColor = 'green';

  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.backgroundColor = this.backgroundColor;
    this.elementRef.nativeElement.style.display = this.appMyDirective;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.elementRef.nativeElement.style.backgroundColor = this.backgroundColor;
    this.elementRef.nativeElement.style.display = this.appMyDirective;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';
  }

}
