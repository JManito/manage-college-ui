import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesListComponent } from './features/courses/courses-list/courses-list.component';
import { AddCourseComponent } from './features/courses/add-course/add-course.component';
import { CoursesEditComponent } from './features/courses/courses-edit/courses-edit.component';
import { CoursesDeleteComponent } from './features/courses/courses-delete/courses-delete.component';

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
  },
  {
    path: 'courses/delete/:id',
    component: CoursesDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
