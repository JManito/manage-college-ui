import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CoursesListComponent } from './features/courses/courses-list/courses-list.component';
import { AddCourseComponent } from './features/courses/add-course/add-course.component';
import { CoursesEditComponent } from './features/courses/courses-edit/courses-edit.component';
import { CoursesDeleteComponent } from './features/courses/courses-delete/courses-delete.component';
import { DisciplinesListComponent } from './features/disciplines/disciplines-list/disciplines-list.component';
import { DisciplinesCreateComponent } from './features/disciplines/disciplines-create/disciplines-create.component';
import { CoursesEnrollComponent } from './features/courses/courses-enroll/courses-enroll.component';
import { CoursesInfoComponent } from './features/courses/courses-info/courses-info.component';
import { DisciplinesEditComponent } from './features/disciplines/disciplines-edit/disciplines-edit.component';
import { DisciplinesDeleteComponent } from './features/disciplines/disciplines-delete/disciplines-delete.component';
import { HomepageComponent } from './features/homepage/homepage.component';
import { DisciplinesInfoComponent } from './features/disciplines/disciplines-info/disciplines-info.component';
import { ProfessorListComponent } from './features/professors/professor-list/professor-list.component';
import { AddProfessorComponent } from './features/professors/add-professor/add-professor.component';
import { ProfessorEditComponent } from './features/professors/professor-edit/professor-edit.component';
import { ProfessorDeleteComponent } from './features/professors/professor-delete/professor-delete.component';
import { StudentListComponent } from './features/students/student-list/student-list.component';
import { StudentAddComponent } from './features/students/student-add/student-add.component';
import { StudentEditComponent } from './features/students/student-edit/student-edit.component';
import { StudentDeleteComponent } from './features/students/student-delete/student-delete.component';
import { StudentGradesComponent } from './features/students/student-grades/student-grades.component';

const routes: Routes = [
  
  
  { path: '', component: HomepageComponent},

  //Routes for Course management pages
  { path: 'courses', component: CoursesListComponent},
  { path: 'courses/add', component: AddCourseComponent},
  { path: 'courses/info/:id', component: CoursesInfoComponent},
  { path: 'courses/enroll/:id', component: CoursesEnrollComponent},
  { path: 'courses/edit/:id', component: CoursesEditComponent},
  { path: 'courses/delete/:id', component: CoursesDeleteComponent},
    
  //Routes for Disciplines management pages
  { path: 'disciplines', component: DisciplinesListComponent},
  { path: 'disciplines/add', component: DisciplinesCreateComponent},
  { path: 'disciplines/edit/:id', component: DisciplinesEditComponent},
  { path: 'disciplines/delete/:id', component: DisciplinesDeleteComponent},
  { path: 'disciplines/info/:id', component: DisciplinesInfoComponent},
  
  //Routes for Professor management pages
  { path: 'professors', component: ProfessorListComponent},
  { path: 'professors/add', component: AddProfessorComponent},
  { path: 'professors/edit/:id', component: ProfessorEditComponent},
  { path: 'professors/delete/:id', component: ProfessorDeleteComponent},

    //Routes for Student management pages
    { path: 'students', component: StudentListComponent},
    { path: 'students/add', component: StudentAddComponent},
    { path: 'students/edit/:id', component: StudentEditComponent},
    { path: 'students/delete/:id', component: StudentDeleteComponent},
    { path: 'students/grades/:id', component: StudentGradesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
