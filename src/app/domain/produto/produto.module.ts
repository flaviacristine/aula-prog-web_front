import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// Component
import {ProdutoListComponent} from './produto-list/produto-list.component'
import {ProdutoFormComponent} from './produto-form/produto-form.component'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

//routing 
import {ProdutoRouting} from './produto-routing.module';

//Service
import {ProdutoService} from './produto.service';

@NgModule({
    declarations: [
        //Componentes
        ProdutoListComponent,
        ProdutoFormComponent

    ],
    imports: [
      // angular
      HttpModule,
      RouterModule,
      CommonModule,
      // form
    FormsModule,
    ReactiveFormsModule,

      // Routing
      ProdutoRouting
    ],
    
    providers: [
      // services
      ProdutoService
    ]

  })
  export class ProdutoModule { }