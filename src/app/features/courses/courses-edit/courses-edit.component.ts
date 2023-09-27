import { Component, OnDestroy } from '@angular/core';
import { AddCourseComponent } from '../add-course/add-course.component';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AddCourseRequest } from '../../models/add-course-request.model';

@Component({
  selector: 'app-courses-edit',
  templateUrl: './courses-edit.component.html',
  styleUrls: ['./courses-edit.component.scss']
})
export class CoursesEditComponent implements OnDestroy{

  constructor(private route: ActivatedRoute){
  }

  ngOnInit(): void {
   
  }


  ngOnDestroy(): void {
  
    
  }

}
