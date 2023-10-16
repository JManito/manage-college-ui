import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { CoursesDetailsComponent } from './features/courses/courses-details/courses-details.component';
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
    CoursesDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
