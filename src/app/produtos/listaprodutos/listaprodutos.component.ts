import { ProdutosService } from './../produtos.service';
import { Produtos } from './../../core/model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listaprodutos',
  templateUrl: './listaprodutos.component.html',
  styleUrls: ['./listaprodutos.component.scss']
})
export class ListaprodutosComponent implements OnInit {

  produtos: Produtos[] = []

  displayedColumns= ['id', 'nomeproduto']

  constructor(private ProdutosService: ProdutosService) { }

  ngOnInit(): void {
    this.produtos = this.ProdutosService.list();
  }

}
