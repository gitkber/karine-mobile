import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class AppComponent {

  @ViewChild('mySidenav', {static: true}) mySidenav: ElementRef;

  constructor(private renderer: Renderer2) { }

  openNav() {
    this.renderer.setStyle(this.mySidenav.nativeElement, 'width', '250px');
  }

  closeNav() {
    this.renderer.setStyle(this.mySidenav.nativeElement, 'width', '0');
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}

