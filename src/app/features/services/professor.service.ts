import { Injectable } from '@angular/core';
import { Professor } from '../models/professor.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  addProfessor(model: Professor): Observable<void> {
    return this.http.post<void>(this.baseApiUrl + '/api/professor', model);
  }

  getAllProfessors(): Observable<Professor[]> {
    return this.http.get<Professor[]>(this.baseApiUrl + '/api/professor');
  }

  editProfessor(model: Professor, id: string): Observable<void> {
    return this.http.put<void>(this.baseApiUrl + '/api/professor/' + id, model);
  }

  deleteProfessor(id: string): Observable<Professor> {
    return this.http.delete<Professor>(this.baseApiUrl + '/api/professor/' + id);
  }

  getProfessor(id: string): Observable<Professor>{
    return this.http.get<Professor>(this.baseApiUrl + '/api/professor/' + id);
  }
}
