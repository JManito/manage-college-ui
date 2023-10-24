import { Component } from '@angular/core';
import { Discipline } from '../../models/discipline.model';
import { DisciplinesService } from '../../services/disciplines.service';
import { Auth } from '../../models/authentication.model';
import { HomepageService } from '../../services/homepage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-disciplines-list',
  templateUrl: './disciplines-list.component.html',
  styleUrls: ['./disciplines-list.component.scss']
})

export class DisciplinesListComponent {
  Disciplines: Discipline[] = [];
  loggedAs!: string;
  error!: string;

  authDetails: Auth = {
    id: 0,
    authAs: '',
    isAuth: 0,
  }
  constructor(private DisciplinesService: DisciplinesService, private hs: HomepageService, private router: Router){  }
  
  ngOnInit(): void {
    this.hs.getAuth().subscribe(
      {
        next: (data) => {
            this.authDetails = data;
            this.loggedAs = this.authDetails.authAs; 
            this.DisciplinesService.getAllDisciplines().subscribe({
              next: (Discipline) => {
                  Discipline.forEach(element => {
                      this.Disciplines.push({disciplineId: element.disciplineId, disciplineName: element.disciplineName, professorId: element.professorId});
               });
              },
              error: (response) => {
                console.log(response);
              }
            })
        }, error: (err) => {
          if(!err.ok)this.error = err.ok;
          this.error;
        }
    }); 







  }
}
 