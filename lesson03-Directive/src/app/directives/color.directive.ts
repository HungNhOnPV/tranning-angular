import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private _element: ElementRef, private _render: Renderer2) {
    // _element.nativeElement.style.color = "red";
    _render.setStyle(_element.nativeElement, "color", "red");
    _render.setStyle(_element.nativeElement, "background", "#e6e6e6");
  }

}
