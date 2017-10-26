import { Component, OnInit } from '@angular/core';

import {ProdutoService} from './produto.service';
import {Produto} from './produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produtos : Produto[];


  constructor(private produtoService : ProdutoService) {

    this.produtoService.getProdutos()
      .then(result => {
        this.produtos = result;
      })
      .catch( error => {
        console.log(' ----- ERROR ----- '+ error.message);
      });

   }

  ngOnInit() {
  }

}
