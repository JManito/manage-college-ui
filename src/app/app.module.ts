import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { CoursesListComponent } from './features/courses/courses-list/courses-list.component';
import { AddCourseComponent } from './features/courses/add-course/add-course.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { CoursesEditComponent } from './features/courses/courses-edit/courses-edit.component';
import { CoursesDeleteComponent } from './features/courses/courses-delete/courses-delete.component';
import { DisciplinesListComponent } from './features/disciplines/disciplines-list/disciplines-list.component';
import { DisciplinesEditComponent } from './features/disciplines/disciplines-edit/disciplines-edit.component';
import { DisciplinesCreateComponent } from './features/disciplines/disciplines-create/disciplines-create.component';
import { DisciplinesDeleteComponent } from './features/disciplines/disciplines-delete/disciplines-delete.component';
import { HomepageComponent } from './features/homepage/homepage.component';
import { CoursesEnrollComponent } from './features/courses/courses-enroll/courses-enroll.component';
import { CoursesInfoComponent } from './features/courses/courses-info/courses-info.component';
import { DisciplinesInfoComponent } from './features/disciplines/disciplines-info/disciplines-info.component';
import { AddProfessorComponent } from './features/professors/add-professor/add-professor.component';
import { ProfessorListComponent } from './features/professors/professor-list/professor-list.component';
import { ProfessorEditComponent } from './features/professors/professor-edit/professor-edit.component';
import { ProfessorDeleteComponent } from './features/professors/professor-delete/professor-delete.component';
import { StudentDeleteComponent } from './features/students/student-delete/student-delete.component';
import { StudentEditComponent } from './features/students/student-edit/student-edit.component';
import { StudentListComponent } from './features/students/student-list/student-list.component';
import { StudentAddComponent } from './features/students/student-add/student-add.component';
import { StudentGradesComponent } from './features/students/student-grades/student-grades.component';
import { FooterComponent } from './core/components/footer/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CoursesListComponent,
    AddCourseComponent,
    CoursesEditComponent,
    CoursesDeleteComponent,
    DisciplinesListComponent,
    DisciplinesEditComponent,
    DisciplinesCreateComponent,
    DisciplinesDeleteComponent,
    HomepageComponent,
    CoursesEnrollComponent,
    CoursesInfoComponent,
    DisciplinesInfoComponent,
    AddProfessorComponent,
    ProfessorListComponent,
    ProfessorEditComponent,
    ProfessorDeleteComponent,
    StudentDeleteComponent,
    StudentEditComponent,
    StudentListComponent,
    StudentAddComponent,
    StudentGradesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
