import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { ProdutoNovoComponent } from './produto-novo/produto-novo.component';
import { ProdutoEditarComponent } from './produto-editar/produto-editar.component';

const routes: Routes = [
  {
    path: 'produtos',
    component: ProdutosComponent,
    data: { title: 'Lista de Produtos' }
  },
  {
    path: 'produto-detalhe/:id',
    component: ProdutoDetalheComponent,
    data: { title: 'Detalhe do Produto' }
  },
  {
    path: 'produto-novo',
    component: ProdutoNovoComponent,
    data: { title: 'Adicionar Produto' }
  },
  {
    path: 'produto-editar/:id',
    component: ProdutoEditarComponent,
    data: { title: 'Editar o Produto' }
  },
  { path: '',
    redirectTo: '/produtos',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
