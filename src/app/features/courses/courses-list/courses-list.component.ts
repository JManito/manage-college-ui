import { Component } from '@angular/core';
import { GetCourseRequest } from '../models/get-course-request.model';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent {
  courses: GetCourseRequest[] = [];

  constructor(private CoursesService: CoursesService){  }
  
  ngOnInit(): void {
    this.CoursesService.getAllCourses().subscribe({
      next: (courses) => {

        console.log(courses);
        return courses;
      },
      error: (response) => {
        console.log(response);
      }
    })

  }
}
