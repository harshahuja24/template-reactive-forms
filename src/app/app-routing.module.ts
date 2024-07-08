import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenFormComponent } from './template-driven/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive/reactive-form/reactive-form.component';

const routes: Routes = [
  {
    path:'template-driven',
    component:TemplateDrivenFormComponent
  },
  {
    path:'reactive-driven',
    component:ReactiveFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
