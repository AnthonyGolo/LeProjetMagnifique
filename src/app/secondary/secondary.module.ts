import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { BigplusComponent } from './main/bigplus/bigplus.component';
import { ReactiveFormComponent } from './main/reactive-form/reactive-form.component';
import { DataListComponent } from './main/data-list/data-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { SecondaryRoutingModule } from './secondary-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FilterPipe } from './main/data-list/filter.pipe';

@NgModule({
  declarations: [
    MainComponent, 
    BigplusComponent,
    ReactiveFormComponent, 
    DataListComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatSortModule,
    MatTableModule,
    MatFormFieldModule,
    SecondaryRoutingModule
  ]
})

export class SecondaryModule { }
