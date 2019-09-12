import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
}
