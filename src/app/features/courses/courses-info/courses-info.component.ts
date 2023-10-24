import { Component } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { HomepageService } from '../../services/homepage.service';
import { Auth } from '../../models/authentication.model';
import { CourseInfo } from '../../models/course-info.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses-info',
  templateUrl: './courses-info.component.html',
  styleUrls: ['./courses-info.component.scss']
})

export class CoursesInfoComponent {
  coursesInfo: CourseInfo[] = [];
  loggedAs!: string;
  error!: string;

  authDetails: Auth = {
    id: 0,
    authAs: '',
    isAuth: 0,
  }

  constructor(private CoursesService: CoursesService, private hs: HomepageService, private route: ActivatedRoute, private router: Router){  }
 
  ngOnInit(): void {
    
    this.hs.getAuth().subscribe(
      {
        next: (data) => {
            this.authDetails = data;
            this.loggedAs = this.authDetails.authAs; 

              this.route.paramMap.subscribe({
                next: (params) => {
                  console.log(params);
                  let id = Number(params.get('id'));
                  if(id != 0){
                    this.CoursesService.getCourseInfo(id).subscribe({
                      next: (courses) => {
                          courses.forEach(element => {
                              this.coursesInfo = courses;
                              console.log(this.coursesInfo);
                       });
                      },
                      error: (response) => {
                        console.log(response);
                      }
                    });
                  }
                }
              })       
        }, error: (err) => {
          if(!err.ok)this.error = err.ok;
          this.error;
        }
    });

  }

}
