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
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CoursesListComponent,
    AddCourseComponent,
    CoursesEditComponent
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
