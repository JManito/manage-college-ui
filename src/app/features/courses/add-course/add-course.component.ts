import { Component, OnDestroy } from '@angular/core';
import { AddCourseRequest } from '../../models/add-course-request.model';
import { CoursesService } from '../../services/courses.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';


@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnDestroy {

  model: AddCourseRequest;
  private addCourseSubcription?: Subscription;


  constructor(private router: Router, private coursesService: CoursesService, public modalRef: MdbModalRef<AddCourseComponent>){
    this.model = {
      CourseName: ''
    };
  }

  onFormSubmit() {
    this.addCourseSubcription = this.coursesService.addCourse(this.model)
    .subscribe({
      next: (response) => {
        if(response == null) {
          console.log("Curso ja existente")
        } else {
          console.log("Added!")
          this.router.navigate(['/courses'])
        }
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
