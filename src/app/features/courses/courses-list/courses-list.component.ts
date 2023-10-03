import { Component } from '@angular/core';
import { GetCourseRequest } from '../../models/get-course-request.model';
import { CoursesService } from '../../services/courses.service';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { AddCourseComponent } from '../add-course/add-course.component';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})

export class CoursesListComponent {
  courses: GetCourseRequest[] = [];
  modalRef: MdbModalRef<AddCourseComponent> | null = null;

  constructor(private CoursesService: CoursesService, private modalService: MdbModalService){ 
    
   }

   openModal() {
    
    this.modalRef = this.modalService.open(AddCourseComponent, {
      modalClass: 'modal-fullscreen'
    })
  }

  
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
