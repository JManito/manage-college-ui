import { Component, OnDestroy } from '@angular/core';
import { AddCourseRequest } from '../models/add-course-request.model';
import { CoursesService } from '../services/courses.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnDestroy {

  model: AddCourseRequest;
  private addCourseSubcription?: Subscription;


  constructor(private coursesService: CoursesService){
    this.model = {
      CourseName: ''
    };
  }

  onFormSubmit() {
    this.addCourseSubcription = this.coursesService.addCourse(this.model)
    .subscribe({
      next: (response) => {
        console.log("Added!")
      },
      error: (error) => {
        console.log("Error in Angular model!")
      }
    })
  }

  ngOnDestroy(): void {
    this.addCourseSubcription?.unsubscribe();
    
  }

}
