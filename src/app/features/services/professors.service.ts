import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Professor } from '../models/professor.model';
import { ProfessorAdd } from '../models/professor-add.model';

@Injectable({
  providedIn: 'root'
})
export class ProfessorsService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  addProfessor(model: ProfessorAdd): Observable<void> {
    return this.http.post<void>(this.baseApiUrl + '/api/Professors', model);
  }

  getAllProfessors(): Observable<Professor[]> {
    return this.http.get<Professor[]>(this.baseApiUrl + '/api/Professors');
  }

  editProfessor(model: Professor, id: string): Observable<void> {
    return this.http.put<void>(this.baseApiUrl + '/api/Professors/' + id, model);
  }

  deleteProfessor(id: string): Observable<Professor> {
    return this.http.delete<Professor>(this.baseApiUrl + '/api/Professors/' + id);
  }

  getProfessor(id: string): Observable<Professor>{
    return this.http.get<Professor>(this.baseApiUrl + '/api/Professors/' + id);
  }

}
