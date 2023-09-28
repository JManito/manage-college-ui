import { Component } from '@angular/core';
import { Discipline } from '../../models/discipline.model';
import { DisciplinesService } from '../../services/disciplines.service';

@Component({
  selector: 'app-disciplines-list',
  templateUrl: './disciplines-list.component.html',
  styleUrls: ['./disciplines-list.component.scss']
})

export class DisciplinesListComponent {
  Disciplines: Discipline[] = [];

  constructor(private DisciplinesService: DisciplinesService){  }
  
  ngOnInit(): void {
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

  }
}
