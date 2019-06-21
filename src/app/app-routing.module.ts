import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'primary',
    pathMatch: 'full'
  },
  {
    path: 'primary',
    loadChildren: './primary/primary.module#PrimaryModule'
  },
  {
    path: 'secondary',
    loadChildren: './secondary/secondary.module#SecondaryModule'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
