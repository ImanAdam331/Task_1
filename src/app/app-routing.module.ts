import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { Router } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{path:'Student',component:StudentComponent},
{path:'Home' ,component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor(private router: Router) {}

  goToStudentPage() {
    this.router.navigate(['/Student']);


 }
}
