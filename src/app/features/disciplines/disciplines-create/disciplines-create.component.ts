import { Component, OnDestroy } from '@angular/core';
import { DisciplineAdd } from '../../models/discipline-add.model';
import { DisciplinesService } from '../../services/disciplines.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-disciplines-create',
  templateUrl: './disciplines-create.component.html',
  styleUrls: ['./disciplines-create.component.scss']
})
export class DisciplinesCreateComponent implements OnDestroy{

  model: DisciplineAdd;
  private addDisciplineSubscription?: Subscription;


  constructor(private router: Router, private disciplinesService: DisciplinesService){
    this.model = {
      DisciplineName: '',
      ProfessorId: 0
    };
  }

  onFormSubmit() {
    this.addDisciplineSubscription = this.disciplinesService.addDiscipline(this.model)
    .subscribe({
      next: (response) => {
        if(response == null) {
          console.log("Disciplina ja existente")
        } else {
          console.log("Adicionada!");
        }
      },
      error: (error) => {
        console.log(error.error)
      }
    })
  }

  ngOnDestroy(): void {
    this.addDisciplineSubscription?.unsubscribe();
    
  }

}
