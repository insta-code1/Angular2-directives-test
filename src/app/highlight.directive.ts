import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = this.defaultColor;
  };
   @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = this.highlightColor;
  };
  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }
  @Input() defaultColor = 'white';
  @Input('highlight') highlightColor = 'green';
  private backgroundColor: string;

  constructor() {
    //this.elementRef.nativeElement.style.backgroundColor = 'green';
    //this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color','green'); 
  }

}
