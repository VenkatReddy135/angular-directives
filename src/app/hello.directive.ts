import { Directive, ElementRef, Renderer2,HostListener } from '@angular/core';

@Directive({
  selector: '[appHello]'
})
export class HelloDirective {

  constructor(private r:Renderer2,private e:ElementRef) { }
    @HostListener('click') 
    hello(){
     alert('welcome')
    }
    @HostListener('mouseover') 
    div(){
     this.r.setStyle(this.e.nativeElement,'color','blue')
    }
  }
  


