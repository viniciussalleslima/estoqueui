import { Categoria } from './../core/model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor() { }
  list(): Categoria[] {
    return[

    {id: 1, nomecategoria: 'alimentação'},
    {id: 2, nomecategoria: 'Saúde'},
    {id: 3, nomecategoria: 'Físico'}
    ]

  }
}
