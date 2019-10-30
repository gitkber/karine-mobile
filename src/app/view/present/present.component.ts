import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Category, getPathOfCategory, Note } from '../../core/model';
import { FacadeService } from '../../core/service/facade.service';

@Component({
  selector: 'app-present',
  templateUrl: './present.component.html',
  styleUrls: ['./present.component.css'],
  // animations: [
  //   trigger('listStagger', [
  //     transition('* <=> *', [
  //       query(
  //         ':enter',
  //         [
  //           style({opacity: 0, transform: 'translateY(-15px)'}),
  //           stagger(
  //             '50ms',
  //             animate(
  //               '550ms ease-out',
  //               style({opacity: 1, transform: 'translateY(0px)'})
  //             )
  //           )
  //         ],
  //         {optional: true}
  //       ),
  //       query(':leave', animate('50ms', style({opacity: 0})), {
  //         optional: true
  //       })
  //     ])
  //   ])
  // ]
})
export class PresentComponent implements OnInit {

  today: Date = new Date();
  notes: Note[];

  todayNotesSize: number;
  tomorrowNotesSize: number;

  todaySelected: boolean;
  tomorrowSelected: boolean;

  constructor(private facadeService: FacadeService, private router: Router) { }

  ngOnInit() {
    this.goPresent();
    this.facadeService.noteService.futureList().subscribe(notes => {
      this.tomorrowNotesSize = notes.length;
    });
  }

  getPath(category: Category) {
    return getPathOfCategory(category);
  }

  acceptNote(note: Note) {
    this.facadeService.acceptNote(note);
  }

  consultNote(note: Note) {
    this.router.navigate(['/consultNote', note.key]);
  }

  goFuture() {
    this.facadeService.noteService.futureList().subscribe(notes => {
      this.notes = notes;
      this.todaySelected = false;
      this.tomorrowSelected = true;
    });
  }

  goPresent() {
    this.facadeService.noteService.presentList().subscribe(notes => {
      this.notes = notes;
      this.todayNotesSize = notes.length;
      this.todaySelected = true;
      this.tomorrowSelected = false;
    });
  }
}
