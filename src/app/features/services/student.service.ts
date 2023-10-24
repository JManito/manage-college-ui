import { Injectable } from '@angular/core';
import { AddStudent, Student, StudentGrades } from '../models/student.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  addStudent(model: AddStudent): Observable<void> {
    return this.http.post<void>(this.baseApiUrl + '/api/students', model);
  }
  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.baseApiUrl + '/api/students');
  }
  editStudent(model: Student, id: string): Observable<void> {
    return this.http.put<void>(this.baseApiUrl + '/api/students/' + id, model);
  }
  deleteStudent(id: string): Observable<Student> {
    return this.http.delete<Student>(this.baseApiUrl + '/api/students/' + id);
  }
  getStudent(id: string): Observable<Student>{
    return this.http.get<Student>(this.baseApiUrl + '/api/students/' + id);
  }
  getStudentGrades(id: number): Observable<StudentGrades[]> {
    return this.http.post<StudentGrades[]>(this.baseApiUrl + '/api/grades/students',  id);
  }
  enrollStudent(courseId: string, id: number): Observable<void> {
    return this.http.post<void>(this.baseApiUrl + '/api/courses/' + courseId + '/enroll/' + id, id);
  }
  
}
