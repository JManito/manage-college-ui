import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { DisciplinesService } from '../../services/disciplines.service';
import { ActivatedRoute } from '@angular/router';
import { Discipline } from '../../models/discipline.model';
import { DisciplineAdd } from '../../models/discipline-add.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-disciplines-delete',
  templateUrl: './disciplines-delete.component.html',
  styleUrls: ['./disciplines-delete.component.scss']
})
export class DisciplinesDeleteComponent {
  model: DisciplineAdd;
  private addDisciplineSubscription?: Subscription;

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
          this.disciplinesService.deleteDiscipline(id).subscribe({
            next: (response) => {
              this.disciplineDetails = response;
              this.router.navigate(['/disciplines'])
            },
            error: (error) => {
              console.log(error.error);
              this.router.navigate(['/disciplines']);

            }
          })
        }
      }
    })
  }
}
