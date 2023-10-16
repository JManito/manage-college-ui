import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CoursesService } from '../../services/courses.service';
import { ActivatedRoute } from '@angular/router';
import { AddCourseRequest } from '../../models/add-course-request.model';
import { GetCourseRequest } from '../../models/get-course-request.model';
import { Student } from '../../models/student.model';
import { Router } from '@angular/router';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-courses-enroll',
  templateUrl: './courses-enroll.component.html',
  styleUrls: ['./courses-enroll.component.scss']
})
export class CoursesEnrollComponent {
  addCourseModel: AddCourseRequest;
  studentList: Student[] = [];
  private addCourseSubcription?: Subscription;
  courseDetails: GetCourseRequest = {
    id: 0,
    courseName: ''
  }
  studentDetails: Student = {
    studentId:0,
    studentName: '',
    dateOfBirth: new Date(),
    enrollmentNumber:0

  }

  
  constructor(private router: Router, private route: ActivatedRoute, private coursesService: CoursesService, private ss: StudentService){
    this.addCourseModel = {
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
              this.ss.getAllStudents().subscribe({
                next: (response) => {
                  response.forEach(element => {
                        this.studentList.push(
                          {studentId: element.studentId, studentName: element.studentName, dateOfBirth: element.dateOfBirth, enrollmentNumber:element.enrollmentNumber});
                 });
                },
                error: (response) => {
                  console.log(response);
                }
              });
            }
          })
        }
      }
    })

  }

  onFormSubmit() {
    
    this.route.paramMap.subscribe({
      next: (params) => {
        debugger;
        const id = params.get('courseId');
        const studentId = params.get('studentId');
        if(id && studentId){
          this.ss.enrollStudent(this.studentDetails, id, studentId).subscribe({
            next: (response) => {
              if(response == null) {
                console.log("Aluno ja inscrito")
              } else {
                console.log("Aluno inscrito!")
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
