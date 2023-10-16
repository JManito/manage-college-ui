import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  addStudent(model: Student): Observable<void> {
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
  enrollStudent(model: Student, courseId: string, id: string): Observable<void> {
    return this.http.post<void>(this.baseApiUrl + '/api/students/' + id + '/enroll/' + courseId, model);
  }

}
