import { Component, OnInit } from '@angular/core';
import { Budget, Note } from '../../core/model';
import { FacadeService } from '../../core/service/facade.service';

@Component({
  selector: 'app-budget-month',
  templateUrl: './budget-month.component.html',
  styleUrls: ['./budget-month.component.css']
})
export class BudgetMonthComponent implements OnInit {

  today: Date = new Date();

  budgets: Budget[];

  constructor(private facadeService: FacadeService) {
    this.today.setHours(23, 59, 59);
  }

  ngOnInit() {
    this.facadeService.budgetService.budgetList(this.today.getFullYear(), this.today.getMonth()).subscribe(notes => {
      this.budgets = notes;
    });
  }

}
