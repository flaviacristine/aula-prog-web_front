import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {Category} from '../category';
import {CategoryService} from '../category.service';

import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'category-form',
    templateUrl: './category-form.component.html',
    styleUrls: ['./category-form.component.css']
  })
  export class CategoryFormComponent implements OnInit {
    form: FormGroup;
    
    
    constructor(
      private categoryService: CategoryService,
      private formBuilder: FormBuilder,
      private router: Router,
      private route: ActivatedRoute,


    ){}

    ngOnInit() {

      let category: Category = new Category();
      category.id = this.route.snapshot.params['id'];

      this.form = this.formBuilder.group({
        id:[],
        nome: ['', Validators.required]
      },   {});

      if(category.id != null){
        this.categoryService.findOne(category.id)
          .subscribe(category => {
            this.form.patchValue(category);
          })
      }
    }

    salvar(category: Category){


      if(category.id == null) {
        this.categoryService.save(category).subscribe(data => {
            this.router.navigate(['/category']);
            console.log('ta salvando');
        })
    } else {
        this.categoryService.update(category).subscribe(
            () => this.router.navigate(['/category'])
        )
    }




    }
    }