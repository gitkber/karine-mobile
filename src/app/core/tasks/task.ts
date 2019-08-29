export class Task {
  key: string;
  description: string;
  category: Category;
}

export enum Category {
  HOME = 'HOME',
  TRANSPORT = 'TRANSPORT',
  WELLNESS = 'WELLNESS',
  OBJECTIVE = 'OBJECTIVE',
  OTHER = 'OTHER',
}
