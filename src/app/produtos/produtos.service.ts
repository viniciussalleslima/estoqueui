import { Produtos } from './../core/model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor() { }
  list(): Produtos[] {
    return [
      {id: 1, nomeproduto: 'caneca'},
    {id: 2, nomeproduto: 'cadeira'},
    {id: 3, nomeproduto: 'mesa'}
    ]

  }

}
