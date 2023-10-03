import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DisciplinesService } from '../../services/disciplines.service';
import { ActivatedRoute } from '@angular/router';
import { AddCourseRequest } from '../../models/add-course-request.model';
import { GetCourseRequest } from '../../models/get-course-request.model';
import { Router } from '@angular/router';
import { Discipline } from '../../models/discipline.model';
import { DisciplineAdd } from '../../models/discipline-add.model';


@Component({
  selector: 'app-disciplines-edit',
  templateUrl: './disciplines-edit.component.html',
  styleUrls: ['./disciplines-edit.component.scss']
})
export class DisciplinesEditComponent {

  model: DisciplineAdd;
  private addDisciplineSubcription?: Subscription;

  disciplineDetails: Discipline = {
    disciplineId: 0,
    disciplineName: '',
    professorId: 0
  }
  constructor(private router: Router, private route: ActivatedRoute, private disciplinesService: DisciplinesService){
    this.model = {
      DisciplineName: '',
      ProfessorId: 0
    };
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if(id){
          this.disciplinesService.getDiscipline(id).subscribe({
            next: (response) => {
              this.disciplineDetails = response;
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
          this.disciplinesService.editDiscipline(this.disciplineDetails, id).subscribe({
            next: (response) => {
              if(response == null) {
                console.log("Disciplina ja existente")
              } else {
                console.log("Disciplina editada!")
                this.router.navigate(['/disciplines'])
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
    this.addDisciplineSubcription?.unsubscribe();
  }
}
