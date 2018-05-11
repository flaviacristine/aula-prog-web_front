import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from '../../category/category';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';
import { CategoryService } from '../../category/category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {
  form: FormGroup;
  produto: Produto;
  categories: Category[];

  constructor(
    private produtoService: ProdutoService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    public categoryService: CategoryService,


  ) { }

  ngOnInit() {

    this.categoryService.findAll()
        .subscribe(categories => {
          this.categories = categories;
          console.log(this.categories);
        });

    let produto: Produto = new Produto();
    produto.id = this.route.snapshot.params['id'];

    this.form = this.formBuilder.group({
      id: [],
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      marca: ['', Validators.required],
      preco: ['', Validators.required],
      category:[]
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