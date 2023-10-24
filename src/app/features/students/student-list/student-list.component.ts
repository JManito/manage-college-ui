import { Component } from '@angular/core';
import { DatePipe } from '@angular/common'
import { Student } from '../../models/student.model';
import { StudentService } from '../../services/student.service';
import { HomepageService } from '../../services/homepage.service';
import { Auth } from '../../models/authentication.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent {
  students: Student[] = [];
  loggedAs!: string;
  error!: string;
  professorBirth = new Date();

  authDetails: Auth = {
    id: 0,
    authAs: '',
    isAuth: 0,
  }
  constructor(public datepipe: DatePipe, private studentService: StudentService, private hs: HomepageService, private router: Router){  
    
  }
  
  ngOnInit(): void {
    
    this.hs.getAuth().subscribe(
      {
        next: (data) => {
            this.authDetails = data;
            this.loggedAs = this.authDetails.authAs; 
            this.studentService.getAllStudents().subscribe({
              next: (students) => {
                students.forEach(element => {
                  
                      this.students.push({studentId: element.studentId, 
                                            studentName: element.studentName,
                                            dateOfBirth: this.datepipe.transform(element.dateOfBirth, 'dd-MM-yyyy'),
                                            enrollmentNumber: element.enrollmentNumber,
                                          });
                console.log(students);
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
