import { Component, OnDestroy } from '@angular/core';
import { AddCourseComponent } from '../add-course/add-course.component';
import { Subscription } from 'rxjs';
import { CoursesService } from '../../services/courses.service';
import { ActivatedRoute } from '@angular/router';
import { AddCourseRequest } from '../../models/add-course-request.model';
import { GetCourseRequest } from '../../models/get-course-request.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-delete',
  templateUrl: './courses-delete.component.html',
  styleUrls: ['./courses-delete.component.scss']
})
export class CoursesDeleteComponent {

  model: AddCourseRequest;
  private addCourseSubcription?: Subscription;

  courseDetails: GetCourseRequest = {
    id: 0,
    courseName: ''
  }
  constructor(private router: Router, private route: ActivatedRoute, private coursesService: CoursesService){
    this.model = {
      CourseName: ''
    };
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if(id){
          this.coursesService.deleteCourse(id).subscribe({
            next: (response) => {
              this.courseDetails = response;
              this.router.navigate(['/courses'])
            }
          })
        }
      }
    })
  }

}
