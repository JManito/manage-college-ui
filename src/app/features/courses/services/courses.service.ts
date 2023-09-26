import { Injectable } from '@angular/core';
import { AddCourseRequest } from '../models/add-course-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  addCourse(model: AddCourseRequest): Observable<void> {
    return this.http.post<void>('https://localhost:7012/api/Courses', model);
  }

}
