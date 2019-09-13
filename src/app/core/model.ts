export class HistoryTask {
  key: string;
  taskKey: string;
  description: string;
  category: Category;
  hDate: string;
  done: boolean;
}

export class Task {
  key: string;
  description: string;
  category: Category;
  repeat: Repeat;
  extraRepeat: string;
  nextRepeat: string;
}

export enum Category {
  HOME = 'HOME',
  TRANSPORT = 'TRANSPORT',
  WELLNESS = 'WELLNESS',
  OBJECTIVE = 'OBJECTIVE',
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
    case Category.HOME:
      return '../../../../assets/img/category/budget_house2_32.png';
    case Category.TRANSPORT:
      return '../../../../assets/img/category/budget_car_32.png';
    case Category.WELLNESS:
      return '../../../../assets/img/category/health_prenatal_32.png';
    case Category.OBJECTIVE:
      return '../../../../assets/img/category/objective_target_32.png';
    case Category.OTHER:
      return '../../../../assets/img/category/other_catalog_32.png';
  }
  return '';
}
