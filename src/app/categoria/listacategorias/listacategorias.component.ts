import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../core/model';

@Component({
  selector: 'app-listacategorias',
  templateUrl: './listacategorias.component.html',
  styleUrls: ['./listacategorias.component.scss']
})
export class ListacategoriasComponent implements OnInit {

  categoria: Categoria[] = [
    {id: 1, nomecategoria: 'alimentação'},
    {id: 2, nomecategoria: 'Saúde'}
  ]

  displayedColumns = ['id', 'nomecategoria']

  constructor() { }

  ngOnInit(): void {
  }

}
