import { animate, group, query, style, transition, trigger } from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('Home => *', [
      query(':enter, :leave',
        style({position: 'fixed', width: '100%'}),
        {optional: true}),
      group([
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
      ])
    ]),
    transition('Past => *', [
      query(':enter, :leave',
        style({position: 'fixed', width: '100%'}),
        {optional: true}),
      group([
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
      ])
    ]),
    transition('Consult => *', [
      query(':enter, :leave',
        style({position: 'fixed', width: '100%'}),
        {optional: true}),
      group([
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
      ])
    ]),
    transition('Edit => *', [
      query(':enter, :leave',
        style({position: 'fixed', width: '100%'}),
        {optional: true}),
      group([
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
      ])
    ]),
  ]);
