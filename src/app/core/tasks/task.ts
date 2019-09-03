export class HistoryTask {
  key: string;

  constructor(taskKey: string, description: string, category: Category) {}
}

export class Task {
  key: string;
  description: string;
  category: Category;
  repeat: Repeat;
  extraRepeat: string;
  nextRepeat: Date;
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
