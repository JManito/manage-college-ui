import { Component, OnDestroy } from '@angular/core';
import { AddProfessorComponent } from '../add-professor/add-professor.component';
import { Subscription } from 'rxjs';
import { ProfessorService } from '../../services/professor.service';
import { ActivatedRoute } from '@angular/router';
import { AddProfessor, Professor } from '../../models/professor.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professor-delete',
  templateUrl: './professor-delete.component.html',
  styleUrls: ['./professor-delete.component.scss']
})
export class ProfessorDeleteComponent {
  model: AddProfessor;
  private addProfessorSubcription?: Subscription;

  professorDetails: Professor = {
    professorId: 0,
    professorName: '',
    dateOfBirth: "",
    salary: 0
  }
  constructor(private router: Router, private route: ActivatedRoute, private professorService: ProfessorService){
    this.model = {
      professorName: '',
      dateofBirth: new Date(),
      salary: 0
    };
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if(id){
          this.professorService.deleteProfessor(id).subscribe({
            next: (response) => {
              this.professorDetails = response;
              this.router.navigate(['/professors'])
            }
          })
        }
      }
    })
  }

}
