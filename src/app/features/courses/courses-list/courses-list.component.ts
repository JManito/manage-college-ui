import { Component } from '@angular/core';
import { GetCourseRequest } from '../../models/get-course-request.model';
import { CoursesService } from '../../services/courses.service';

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
          courses.forEach(element => {
              this.courses.push({id: element.id, courseName: element.courseName});
       });
      },
      error: (response) => {
        console.log(response);
      }
    })

  }
}
