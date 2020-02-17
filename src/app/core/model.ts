export class HistoryNote {
  key: string;
  noteKey: string;
  category: Category;
  description: string;
  tagList: Tag[] = [];
  hDate: string;
  done: boolean;
}

// export class BudgetYear {
//   year: number;
//   monthList: BudgetMonth[] = [];
// }
//
// export class BudgetMonth {
//   month: number;
//   tagList: BudgetTag[] = [];
// }

export class BudgetTag {
  tag: Tag;
  sum: number = 0;
  budgetList: Budget[] = [];
}

export class Budget {
  key: string;
  description: string;
  tag: Tag;
  day: number;
  month: number;
  year: number;
  amount: number;
}

export class Note {
  key: string;
  category: Category;
  description: string;
  tagList: Tag[] = [];
  repeat: Repeat;
  extraRepeat: string;
  nextRepeat: string;
  amount: number;
}

export enum Category {
  TASK = 'TASK',
  OBJECTIVE = 'OBJECTIVE',
  BUDGET = 'BUDGET',
}

export enum Tag {
  HOME = 'HOME',
  TRANSPORT = 'TRANSPORT',
  WELLNESS = 'WELLNESS',
  MEDICAL = 'MEDICAL',
  PROFESSIONAL = 'PROFESSIONAL',
  OTHER = 'OTHER',
}

export enum Repeat {
  ONCE = 'ONCE',
  ALL_DAY = 'ALL_DAY',
  ONE_BY_WEEK = 'ONE_BY_WEEK',
  ONE_BY_MONTH = 'ONE_BY_MONTH',
  ONE_BY_YEAR = 'ONE_BY_YEAR',
  EVERY_X_DAYS = 'EVERY_X_DAYS',
  EVERY_X_MONTH = 'EVERY_X_MOIS',
  EVERY_X_YEAR = 'EVERY_X_YEAR',
}

export function getPathOfCategory(category: Category): string {
  switch (category) {
    case Category.TASK:
      return '../../../../assets/img/category/list_32.png';
    case Category.OBJECTIVE:
      return '../../../../assets/img/category/goal_32.png';
    case Category.BUDGET:
      return '../../../../assets/img/category/euro_32.png';
  }
  return '';
}

export function getPathOfFirstTag(tagList: Tag[]): string {
  if (tagList === undefined) {

  } else {
    return getPathOfTag(tagList[0]);
  }
}

export function getPathOfTag(tag: Tag): string {
  switch (tag) {
    case Tag.HOME:
      return '../../../../assets/img/category/budget_house2_32.png';
    case Tag.TRANSPORT:
      return '../../../../assets/img/category/budget_car_32.png';
    case Tag.WELLNESS:
      return '../../../../assets/img/category/health_prenatal_32.png';
    case Tag.MEDICAL:
      return '../../../../assets/img/category/health_first-aid-kit_32.png';
    case Tag.PROFESSIONAL:
      return '../../../../assets/img/category/work_portfolio_32.png';
    case Tag.OTHER:
      return '../../../../assets/img/category/other_catalog_32.png';
  }
  return '';
}
