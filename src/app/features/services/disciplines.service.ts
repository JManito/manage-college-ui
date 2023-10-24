import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Discipline } from '../models/discipline.model';
import { DisciplineAdd } from '../models/discipline-add.model';
import { DisciplineInfo } from '../models/discipline-info.model';

@Injectable({
  providedIn: 'root'
})
export class DisciplinesService  
{

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  addDiscipline(model: DisciplineAdd): Observable<void> {
    return this.http.post<void>(this.baseApiUrl + '/api/Disciplines', model);
  }

  getAllDisciplines(): Observable<Discipline[]> {
    return this.http.get<Discipline[]>(this.baseApiUrl + '/api/Disciplines');
  }

  editDiscipline(model: Discipline, id: string): Observable<void> {
    return this.http.put<void>(this.baseApiUrl + '/api/Disciplines/' + id, model);
  }

  deleteDiscipline(id: string): Observable<Discipline> {
    return this.http.delete<Discipline>(this.baseApiUrl + '/api/Disciplines/' + id);
  }

  getDiscipline(id: string): Observable<Discipline>{
    return this.http.get<Discipline>(this.baseApiUrl + '/api/Disciplines/' + id);
  }
  getDisciplineInfo(id: number): Observable<DisciplineInfo[]>{
    return this.http.post<DisciplineInfo[]>(this.baseApiUrl + '/api/Disciplines/info', id);
  }

}
