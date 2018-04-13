import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private produtoService: ProdutoService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,


  ) { }

  ngOnInit() {

    let produto: Produto = new Produto();
    produto.id = this.route.snapshot.params['id'];

    this.form = this.formBuilder.group({
      id: [],
      nome: ['', Validators.required]
    }, {});

    if (produto.id != null) {
      this.produtoService.findOne(produto.id)
        .subscribe(produto => {
          this.form.patchValue(produto);
        })
    }
  }

  salvar(produto: Produto) {
    this.produtoService.save(produto)
      .subscribe(response => {
        // redirecionar
        this.router.navigate(['/produto']);
      });
  }
}