import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuturosCandidatosRoutingModule } from './futuros-candidatos-routing.module';
import { FuturosCandidatosComponent } from './futuros-candidatos/futuros-candidatos.component';
import { ComponentsModule } from "../../components/components.module";
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        FuturosCandidatosComponent
    ],
    imports: [
        CommonModule,
        FuturosCandidatosRoutingModule,
        ComponentsModule,
        MaterialModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class FuturosCandidatosModule { }
