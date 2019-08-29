import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-icon',
  templateUrl: './category-icon.component.html',
  styleUrls: ['./category-icon.component.css']
})
export class CategoryIconComponent implements OnInit {

  @Input() srcImg: string;

  constructor() { }

  ngOnInit() {
  }

}
