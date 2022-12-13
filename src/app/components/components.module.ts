import { RouterModule } from '@angular/router';
import { MaterialModule } from './../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CreateFuturoCandidatoComponent } from '../views/login/create-futuro-candidato/create-futuro-candidato.component';



@NgModule({
  declarations: [
    NavBarComponent,
    CreateFuturoCandidatoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class ComponentsModule { }
