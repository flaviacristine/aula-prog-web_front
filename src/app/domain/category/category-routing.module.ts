import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { CategoryListComponent } from './category-list/category-list.component';

const CategoryRoutes: Routes = [
    {path: '', component: CategoryListComponent},
]; 

@NgModule({
    imports: [RouterModule.forChild(CategoryRoutes)],
    exports: [RouterModule]
  })
  
export class CategoryRouting {}

