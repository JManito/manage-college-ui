import { Component } from '@angular/core';
import { GetCourseRequest } from '../../models/get-course-request.model';
import { CoursesService } from '../../services/courses.service';
import { HomepageService } from '../../services/homepage.service';
import { Auth } from '../../models/authentication.model';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})

export class CoursesListComponent {
  courses: GetCourseRequest[] = [];
  loggedAs!: string;
  error!: string;

  authDetails: Auth = {
    id: 0,
    authAs: '',
    isAuth: 0,
  }
  constructor(private CoursesService: CoursesService, private hs: HomepageService){  }
  
  ngOnInit(): void {
    
    this.hs.getAuth().subscribe(
      {
        next: (data) => {
            this.authDetails = data;
            this.loggedAs = this.authDetails.authAs; 
            this.CoursesService.getAllCourses().subscribe({
              next: (courses) => {
                  courses.forEach(element => {
                      this.courses.push({id: element.id, courseName: element.courseName});
               });
              },
              error: (response) => {
                console.log(response);
              }
            });
        }, error: (err) => {
          if(!err.ok)this.error = err.ok;
          this.error;
        }
    });

  }
}
