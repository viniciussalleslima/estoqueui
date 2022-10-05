import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ListaprodutosComponent } from './listaprodutos/listaprodutos.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    ListaprodutosComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule

  ]
})
export class ProdutosModule { }
