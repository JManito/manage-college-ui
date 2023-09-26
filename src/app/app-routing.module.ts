import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesListComponent } from './features/courses/courses-list/courses-list.component';
import { AddCourseComponent } from './features/courses/add-course/add-course.component';

const routes: Routes = [
  {
    path: 'courses',
    component: CoursesListComponent
  },
  {
    path: 'courses/add',
    component: AddCourseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
