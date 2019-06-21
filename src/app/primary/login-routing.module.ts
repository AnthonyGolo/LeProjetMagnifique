import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { DummyComponent } from './dummy/dummy.component';

const routes: Routes = [
  { path: '', component: DummyComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'login/error', component: ErrorComponent },
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
