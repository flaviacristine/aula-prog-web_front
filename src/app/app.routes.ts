import { Routes, RouterModule } from '@angular/router';

import { ProdutoComponent } from './produto/produto.component';

export const routes : Routes =[
    { path: '', redirectTo: 'produto', pathMatch: 'full' },
    {path: 'produto', component: ProdutoComponent}
];

export const appRoutingProviders: any[] = [];
    
export const routing = RouterModule.forRoot(routes);