import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { ListacategoriasComponent } from './listacategorias/listacategorias.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    ListacategoriasComponent
  ],
  imports: [
    CommonModule,
    CategoriaRoutingModule,
    MatTableModule
  ]
})
export class CategoriaModule { }
