import { CategoriasService } from './../categorias.service';
import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../core/model';

@Component({
  selector: 'app-listacategorias',
  templateUrl: './listacategorias.component.html',
  styleUrls: ['./listacategorias.component.scss']
})
export class ListacategoriasComponent implements OnInit {

  categoria: Categoria[] = []

  displayedColumns = ['id', 'nomecategoria']

  constructor(private CategoriasService: CategoriasService) { }

  ngOnInit(): void {
  this.categoria = this.CategoriasService.list();
  }

}
