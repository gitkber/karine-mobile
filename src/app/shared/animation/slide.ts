import { animate, group, query, style, transition, trigger } from '@angular/animations';

const queryFct = query(':enter, :leave',
  style({position: 'fixed', width: '100%'}),
  {optional: true});

const leftToRightStep = group([
  query(':enter', [
    style({transform: 'translateX(100%)'}),
    animate('0.5s ease-in-out',
      style({transform: 'translateX(0%)'}))
  ], {optional: true}),
  query(':leave', [
    style({transform: 'translateX(0%)'}),
    animate('0.5s ease-in-out',
      style({transform: 'translateX(-100%)'}))
  ], {optional: true}),
]);

const rightToLeftStep = group([
  query(':enter', [
    style({transform: 'translateX(-100%)'}),
    animate('0.5s ease-in-out',
      style({transform: 'translateX(0%)'}))
  ], {optional: true}),
  query(':leave', [
    style({transform: 'translateX(0%)'}),
    animate('0.5s ease-in-out',
      style({transform: 'translateX(100%)'}))
  ], {optional: true}),
]);

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('Present => *', [queryFct, leftToRightStep]),
    transition('Past => *', [queryFct, rightToLeftStep]),
    transition('Consult => *', [queryFct, rightToLeftStep]),
    transition('Edit => *', [queryFct, rightToLeftStep]),
  ]);
