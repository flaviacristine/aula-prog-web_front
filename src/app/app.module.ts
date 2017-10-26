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

@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    CategoriaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    ProdutoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
