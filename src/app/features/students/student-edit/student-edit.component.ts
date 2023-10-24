import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { StudentService } from '../../services/student.service';
import { ActivatedRoute } from '@angular/router';
import { Student, AddStudent } from '../../models/student.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.scss']
})
export class StudentEditComponent {
  model: AddStudent;
  private addStudentSubcription?: Subscription;

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
          this.studentService.getStudent(id).subscribe({
            next: (response) => {
              this.studentDetails = response;
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
          this.studentService.editStudent(this.studentDetails, id).subscribe({
            next: (response) => {
              if(response == null) {
                console.log("Aluno ja existente")
              } else {
                console.log("Aluno editado!")
                this.router.navigate(['/students'])
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
    this.addStudentSubcription?.unsubscribe();
  }


}
