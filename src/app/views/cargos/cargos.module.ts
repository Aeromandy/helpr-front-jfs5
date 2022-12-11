import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CargosRoutingModule } from './cargos-routing.module';
import { CargosComponent } from './cargos/cargos.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { NewCargoComponent } from './new-cargo/new-cargo.component';
import { MatTableModule } from '@angular/material/table';
import { EditCargoComponent } from './edit-cargo/edit-cargo.component';


@NgModule({
  declarations: [
    CargosComponent,
    NewCargoComponent,
    EditCargoComponent
  ],
  imports: [
    CommonModule,
    CargosRoutingModule,
    ComponentsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule
  ]
})
export class CargosModule { }
