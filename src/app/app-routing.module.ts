import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CoursesListComponent } from './features/courses/courses-list/courses-list.component';
import { AddCourseComponent } from './features/courses/add-course/add-course.component';
import { CoursesEditComponent } from './features/courses/courses-edit/courses-edit.component';
import { CoursesDeleteComponent } from './features/courses/courses-delete/courses-delete.component';
import { DisciplinesListComponent } from './features/disciplines/disciplines-list/disciplines-list.component';
import { DisciplinesCreateComponent } from './features/disciplines/disciplines-create/disciplines-create.component';
import { DisciplinesEditComponent } from './features/disciplines/disciplines-edit/disciplines-edit.component';
import { DisciplinesDeleteComponent } from './features/disciplines/disciplines-delete/disciplines-delete.component';


const routes: Routes = [
  
  

  //Routes for Course management pages
  { path: 'courses', component: CoursesListComponent},
  { path: 'courses/add', component: AddCourseComponent},
  { path: 'courses/edit/:id', component: CoursesEditComponent},
  { path: 'courses/delete/:id', component: CoursesDeleteComponent},
    
  //Routes for Disciplines management pages
  { path: 'disciplines', component: DisciplinesListComponent},
  { path: 'disciplines/add', component: DisciplinesCreateComponent},
  { path: 'disciplines/edit/:id', component: DisciplinesEditComponent},
  { path: 'disciplines/delete/:id', component: DisciplinesDeleteComponent}
    
  



];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
