import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProfessorService } from '../../services/professor.service';
import { ActivatedRoute } from '@angular/router';
import { Professor, AddProfessor } from '../../models/professor.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professor-edit',
  templateUrl: './professor-edit.component.html',
  styleUrls: ['./professor-edit.component.scss']
})
export class ProfessorEditComponent {
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
          this.professorService.getProfessor(id).subscribe({
            next: (response) => {
              this.professorDetails = response;
            }
          })
        }
      }
    })
  }

  onFormSubmit() {
    
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if(id){
          this.professorService.editProfessor(this.professorDetails, id).subscribe({
            next: (response) => {
              if(response == null) {
                console.log("Professor ja existente")
              } else {
                console.log("Professor editado!")
                this.router.navigate(['/professors'])
              }
            },
            error: (error) => {
              console.log("Erro!")
            }
          })
        }
      }
    })
  }

  ngOnDestroy(): void {
    this.addProfessorSubcription?.unsubscribe();
  }


}
