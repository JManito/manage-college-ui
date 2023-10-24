import { Injectable } from '@angular/core';
import { AddProfessor, Professor } from '../models/professor.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  addProfessor(model: AddProfessor): Observable<void> {
    return this.http.post<void>(this.baseApiUrl + '/api/professors', model);
  }

  getAllProfessors(): Observable<Professor[]> {
    return this.http.get<Professor[]>(this.baseApiUrl + '/api/professors');
  }

  editProfessor(model: Professor, id: string): Observable<void> {
    return this.http.put<void>(this.baseApiUrl + '/api/professors/' + id, model);
  }

  deleteProfessor(id: string): Observable<Professor> {
    return this.http.delete<Professor>(this.baseApiUrl + '/api/professors/' + id);
  }

  getProfessor(id: string): Observable<Professor>{
    return this.http.get<Professor>(this.baseApiUrl + '/api/professors/' + id);
  }
}
