import { Component, OnInit } from '@angular/core';
import { BudgetTag, Tag } from '../../core/model';
import { FacadeService } from '../../core/service/facade.service';

@Component({
  selector: 'app-budget-month',
  templateUrl: './budget-month.component.html',
  styleUrls: ['./budget-month.component.css']
})
export class BudgetMonthComponent implements OnInit {

  today: Date = new Date();

  map: Map<Tag, BudgetTag> = new Map();

  constructor(private facadeService: FacadeService) {
    this.today.setHours(23, 59, 59);
  }

  ngOnInit() {
    this.facadeService.budgetService.budgetList(this.today.getFullYear(), this.today.getMonth()).subscribe(budgets => {
      budgets.reduce((previousValue, currentValue) => {
        let budgetTag;
        if (this.map.has(currentValue.tag)) {
          budgetTag = this.map.get(currentValue.tag);
        } else {
          budgetTag = new BudgetTag();
          budgetTag.tag = currentValue.tag;
          this.map.set(currentValue.tag, budgetTag);
        }
        budgetTag.budgetList.push(currentValue);
        budgetTag.sum += +currentValue.amount;
        return this.map;
      }, this.map);
    });
  }

}
