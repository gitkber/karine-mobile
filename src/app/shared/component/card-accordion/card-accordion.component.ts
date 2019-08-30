import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-accordion',
  templateUrl: './card-accordion.component.html',
  styleUrls: ['./card-accordion.component.css']
})
export class CardAccordionComponent implements OnInit {

  @Input() collapseId: string;
  @Input() collapse: boolean;
  @Input() nextCard: boolean;
  @Output() saveCard: EventEmitter<any> = new EventEmitter<any>();
  @Input() openNextCardName: string;
  @Output() collapseNextCard: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  collapseCard() {
    this.collapse = true;
  }

}
