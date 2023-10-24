import { Component, OnDestroy } from '@angular/core';
import { AddStudent } from '../../models/student.model';
import { StudentService } from '../../services/student.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.scss']
})
export class StudentAddComponent {
    model: AddStudent;
    private addStudentSubcription?: Subscription;
  
  
    constructor(private studentService: StudentService){
      this.model = {
        studentName: '',
        dateOfBirth: new Date(),
        enrollmentNumber: 0
      };
    }
  
    onFormSubmit() {
      this.addStudentSubcription = this.studentService.addStudent(this.model)
      .subscribe({
        next: (response) => {
          if(response == null) {
            console.log("Estudante ja existente")
          } else {
            console.log("Added!")
          }
        },
        error: (error) => {
          console.log("Error in Angular model!")
        }
      })
    }
  
    ngOnDestroy(): void {
      this.addStudentSubcription?.unsubscribe();
      
    }
  
  }
  