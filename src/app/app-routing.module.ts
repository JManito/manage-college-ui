import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesListComponent } from './features/courses/courses-list/courses-list.component';
import { AddCourseComponent } from './features/courses/add-course/add-course.component';
import { CoursesEditComponent } from './features/courses/courses-edit/courses-edit.component';

const routes: Routes = [
  {
    path: 'courses',
    component: CoursesListComponent
  },
  {
    path: 'courses/add',
    component: AddCourseComponent
  },
  {
    path: 'courses/edit/:id',
    component: CoursesEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
