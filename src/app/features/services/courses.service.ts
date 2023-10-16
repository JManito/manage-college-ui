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
    return this.http.post<void>(this.baseApiUrl + '/api/courses', model);
  }

  getAllCourses(): Observable<GetCourseRequest[]> {
    return this.http.get<GetCourseRequest[]>(this.baseApiUrl + '/api/courses');
  }

  editCourse(model: GetCourseRequest, id: string): Observable<void> {
    return this.http.put<void>(this.baseApiUrl + '/api/courses/' + id, model);
  }

  deleteCourse(id: string): Observable<GetCourseRequest> {
    return this.http.delete<GetCourseRequest>(this.baseApiUrl + '/api/courses/' + id);
  }

  getCourse(id: string): Observable<GetCourseRequest>{
    return this.http.get<GetCourseRequest>(this.baseApiUrl + '/api/courses/' + id);
  }
}
