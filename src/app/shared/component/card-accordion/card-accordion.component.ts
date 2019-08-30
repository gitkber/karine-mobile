import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-accordion',
  templateUrl: './card-accordion.component.html',
  styleUrls: ['./card-accordion.component.css']
})
export class CardAccordionComponent implements OnInit {

  @Input() collapseId: string;
  @Input() showCollapse: boolean;

  constructor() { }

  ngOnInit() {
  }

}
