import { Component, OnInit } from '@angular/core';
import {CarrinhoService} from '../../carrinho/carrinho.service';
import {ProdutoService} from '../produto.service';
import {Produto} from '../produto';

@Component({
    selector: 'produto-home',
    templateUrl: './produto-home.component.html',
    styleUrls: ['./produto-home.component.css']
  })
  export class ProdutoHomeComponent implements OnInit {

  produtos: Produto[];

    constructor(
      private produtoService: ProdutoService,
      private carrinhoService: CarrinhoService
    ){}

    ngOnInit() {
      this.produtoService.findAll()
        .subscribe(produtos => {
          this.produtos = produtos
        });
    }
    adicionarProduto(produto: Produto){
        this.carrinhoService.adicionarProduto(produto);
        let carrinho = localStorage.getItem("carrinho") ?
            JSON.parse(localStorage.getItem("carrinho")) :
            [];
        carrinho.push(produto);
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
    }

}