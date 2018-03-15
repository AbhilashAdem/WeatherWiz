import {Directive, ElementRef, Inject, OnInit, Renderer2} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';

@Directive({
  selector: '[appScriptInjectorDirective]'
})

export class ScriptInjectorDirective implements OnInit{

  constructor( private element: ElementRef, private renderer: Renderer2, @Inject(DOCUMENT) private doc){
  }

  ngOnInit(){
    // let s = this.renderer.createElement('script');
    // s.type = 'text/javascript';
    // s.src = 'https://darksky.net/widget/graph-bar/42.360082,-71.058880/us12/en.js?width=100%&height=400&title=FullForecast&textColor=f8f4f4&bgColor=152b38&transparency=false&skyColor=undefined&fontFamily=Palatino&customFont=&units=us&timeColor=f6ebeb&tempColor=f6ebeb&currentDetailsOption=true';
    // this.element.nativeElement.appendChild(s);

  }

}
