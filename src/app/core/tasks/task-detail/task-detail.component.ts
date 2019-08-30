import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  task: Task;

  constructor(private route: ActivatedRoute, private taskService: TaskService, private router: Router) { }

  ngOnInit() {
    const id: string = this.route.snapshot.paramMap.get('id');
    if (id !== '0') {
      // Edit
      // this.moviesService.getMovie(+id).subscribe(movie => this.movie = movie);
    }
  }

  // deleteMovie() {
  //   this.moviesService.deleteMovie(this.movie.id).subscribe(() => this.router.navigate(['/movies']));
  // }

}
