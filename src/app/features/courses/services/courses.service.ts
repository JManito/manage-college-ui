import { Injectable } from '@angular/core';
import { AddCourseRequest } from '../models/add-course-request.model';
import { GetCourseRequest } from '../models/get-course-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  addCourse(model: AddCourseRequest): Observable<void> {
    return this.http.post<void>(this.baseApiUrl + '/api/Courses', model);
  }

  getAllCourses(): Observable<GetCourseRequest[]> {
    return this.http.get<GetCourseRequest[]>(this.baseApiUrl + '/api/Courses');
  }


}
