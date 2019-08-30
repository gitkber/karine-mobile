import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-accordion',
  templateUrl: './card-accordion.component.html',
  styleUrls: ['./card-accordion.component.css']
})
export class CardAccordionComponent implements OnInit {

  @Input() cardAccordionId: string;
  @Input() nextCardAccordionId: string;

  @Input() open: boolean;
  @Input() stepAction: boolean;

  @Output() saveCard: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  collapseCard() {
    this.open = true;
  }

}
