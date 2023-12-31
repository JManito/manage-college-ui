import { Component, OnDestroy } from '@angular/core';
import { AddCourseComponent } from '../add-course/add-course.component';
import { Subscription } from 'rxjs';
import { CoursesService } from '../../services/courses.service';
import { ActivatedRoute } from '@angular/router';
import { AddCourseRequest } from '../../models/add-course-request.model';
import { GetCourseRequest } from '../../models/get-course-request.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-edit',
  templateUrl: './courses-edit.component.html',
  styleUrls: ['./courses-edit.component.scss']
})
export class CoursesEditComponent implements OnDestroy{

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
          this.coursesService.getCourse(id).subscribe({
            next: (response) => {
              this.courseDetails = response;
            }
          })
        }
      }
    })
  }

  onFormSubmit() {
    
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if(id){
          this.coursesService.editCourse(this.courseDetails, id).subscribe({
            next: (response) => {
              if(response == null) {
                console.log("Curso ja existente")
              } else {
                console.log("Curso editado!")
                this.router.navigate(['/courses'])
              }
            },
            error: (error) => {
              console.log("Erro!")
            }
          })
        }
      }
    })
  }

  ngOnDestroy(): void {
    this.addCourseSubcription?.unsubscribe();
  }


}
