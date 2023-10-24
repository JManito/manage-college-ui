import { Component, OnDestroy } from '@angular/core';
import { AddProfessor } from '../../models/professor.model';
import { ProfessorService } from '../../services/professor.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-professor',
  templateUrl: './add-professor.component.html',
  styleUrls: ['./add-professor.component.scss']
})
export class AddProfessorComponent {
  model: AddProfessor;
  private addProfSubcription?: Subscription;


  constructor(private profService: ProfessorService){
    this.model = {
      professorName: '',
      dateofBirth: new Date(),
      salary: 0
    };
  }

  onFormSubmit() {
    this.addProfSubcription = this.profService.addProfessor(this.model)
    .subscribe({
      next: (response) => {
        if(response == null) {
          console.log("Professor ja existente")
        } else {
          console.log("Added!")
        }
      },
      error: (error) => {
        console.log("Error in Angular model!")
      }
    })
  }

  ngOnDestroy(): void {
    this.addProfSubcription?.unsubscribe();
    
  }

}
