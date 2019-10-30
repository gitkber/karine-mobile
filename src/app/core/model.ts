export class HistoryNote {
  key: string;
  taskKey: string;
  description: string;
  category: Category;
  hDate: string;
  done: boolean;
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
      return '../../../../assets/img/category/budget_car_32.png';
    case Category.OBJECTIVE:
      return '../../../../assets/img/category/objective_target_32.png';
    case Category.BUDGET:
      return '../../../../assets/img/category/budget_house2_32.png';
  }
  return '';
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
      return '../../../../assets/img/category/objective_target_32.png';
    case Tag.OTHER:
      return '../../../../assets/img/category/other_catalog_32.png';
  }
  return '';
}
