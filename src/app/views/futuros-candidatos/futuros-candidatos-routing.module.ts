import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuturosCandidatosComponent } from './futuros-candidatos/futuros-candidatos.component';

const routes: Routes = [{ path: '', component: FuturosCandidatosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuturosCandidatosRoutingModule { }
