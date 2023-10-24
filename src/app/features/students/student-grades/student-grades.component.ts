import { Component } from '@angular/core';
import { DatePipe } from '@angular/common'
import { Student, StudentGrades } from '../../models/student.model';
import { StudentService } from '../../services/student.service';
import { HomepageService } from '../../services/homepage.service';
import { Auth } from '../../models/authentication.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-grades',
  templateUrl: './student-grades.component.html',
  styleUrls: ['./student-grades.component.scss']
})
export class StudentGradesComponent {
  students: Student[] = [];
  studentGrades: StudentGrades[] = [];
  loggedAs!: string;
  error!: string;
  professorBirth = new Date();

  authDetails: Auth = {
    id: 0,
    authAs: '',
    isAuth: 0,
  }
  constructor(public datepipe: DatePipe, private route: ActivatedRoute, private studentService: StudentService, private hs: HomepageService, private router: Router){  
    
  }
  
  ngOnInit(): void {
    
    this.hs.getAuth().subscribe({
        next: (data) => {
            this.authDetails = data;
            this.loggedAs = this.authDetails.authAs; 
            this.route.paramMap.subscribe({
              next: (params) => {
                const id = params.get('id');
                let nid = Number(id);
                if(id){

                  this.studentService.getStudentGrades(nid).subscribe({
                    next: (studentGrades) => {
                      studentGrades.forEach(element => {
                            this.studentGrades = studentGrades;
                            console.log(this.studentGrades);
                     });
                    },
                    error: (response) => {
                      console.log(response);
                    }
                  });

                }
              }
            });

        }, 
        error: (err) => {
          if(!err.ok)this.error = err.ok;
          this.error;
        }
    });
  }
}
