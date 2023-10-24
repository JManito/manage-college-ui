import { Component } from '@angular/core';
import { DatePipe } from '@angular/common'
import { Professor } from '../../models/professor.model';
import { ProfessorService } from '../../services/professor.service';
import { HomepageService } from '../../services/homepage.service';
import { Auth } from '../../models/authentication.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professor-list',
  templateUrl: './professor-list.component.html',
  styleUrls: ['./professor-list.component.scss']
})
export class ProfessorListComponent {
  professors: Professor[] = [];
  loggedAs!: string;
  error!: string;
  professorBirth = new Date();

  authDetails: Auth = {
    id: 0,
    authAs: '',
    isAuth: 0,
  }
  constructor(public datepipe: DatePipe, private professorService: ProfessorService, private hs: HomepageService, private router: Router){  
    
  }
  
  ngOnInit(): void {
    
    this.hs.getAuth().subscribe(
      {
        next: (data) => {
            this.authDetails = data;
            this.loggedAs = this.authDetails.authAs; 
            this.professorService.getAllProfessors().subscribe({
              next: (professors) => {
                professors.forEach(element => {
                  
                      this.professors.push({professorId: element.professorId, 
                                            professorName: element.professorName,
                                            dateOfBirth: this.datepipe.transform(element.dateOfBirth, 'dd-MM-yyyy'),
                                            salary: element.salary,
                                          });
                console.log(professors);
               });
              },
              error: (response) => {
                console.log(response);
              }
            });
        }, error: (err) => {
          if(!err.ok)this.error = err.ok;
          this.error;
        }
    });

  }
}
