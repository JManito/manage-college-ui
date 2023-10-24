import { Component, OnDestroy } from '@angular/core';
import { StudentAddComponent } from '../student-add/student-add.component';
import { Subscription } from 'rxjs';
import { StudentService } from '../../services/student.service';
import { ActivatedRoute } from '@angular/router';
import { AddStudent, Student } from '../../models/student.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.scss']
})
export class StudentDeleteComponent {
 
    model: AddStudent;
    private addStudentSubscription?: Subscription;
  
    studentDetails: Student = {
      studentId: 0,
      studentName: '',
      dateOfBirth: "",
      enrollmentNumber: 0
    }
    constructor(private router: Router, private route: ActivatedRoute, private studentService: StudentService){
      this.model = {
        studentName: '',
        dateOfBirth: new Date(),
        enrollmentNumber: 0
      };
    }
  
    ngOnInit(): void {
      this.route.paramMap.subscribe({
        next: (params) => {
          const id = params.get('id');
          if(id){
            this.studentService.deleteStudent(id).subscribe({
              next: (response) => {
                this.studentDetails = response;
                this.router.navigate(['/students'])
              }
            })
          }
        }
      })
    }
  
  }
  