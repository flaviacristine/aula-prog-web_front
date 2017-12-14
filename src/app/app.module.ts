import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


// Adicionar o modulo HTTP
import { HttpModule } from '@angular/http';

//Adicionar as rotas
import {appRoutingProviders, routing} from './app.routes';

// importar todos os componentes
import { ProdutoComponent } from './produto/produto.component';
import { CategoriaComponent } from './categoria/categoria.component';

// Importar todos os Serviços
import {ProdutoService} from './produto/produto.service';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import {CarrinhoService} from './carrinho/carrinho.service';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    CategoriaComponent,
    CarrinhoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    ProdutoService,
    CarrinhoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
