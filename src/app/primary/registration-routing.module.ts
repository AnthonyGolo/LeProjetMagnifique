import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { ErrorComponent } from './error/error.component';
import { DummyComponent } from './dummy/dummy.component';

const routes: Routes = [
  { 
    path: '', component: DummyComponent,
    children: [
      { path: 'register', component: RegistrationComponent},
      { path: 'register/error', component: ErrorComponent}
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
