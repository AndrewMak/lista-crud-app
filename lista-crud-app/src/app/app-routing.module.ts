import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { ProdutoNovoComponent } from './produto-novo/produto-novo.component';
import { ProdutoEditarComponent } from './produto-editar/produto-editar.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from 'src/service/auth-guard.service';

const routes: Routes = [
  {
    path: 'produtos',
    component: ProdutosComponent,
    canActivate: [AuthGuard],  
    data: { title: 'Lista de Produtos' }
  },
  {
    path: 'produto-detalhe/:id',
    component: ProdutoDetalheComponent,
    canActivate: [AuthGuard],  
    data: { title: 'Detalhe do Produto' }
  },
  {
    path: 'produto-novo',
    component: ProdutoNovoComponent,
    canActivate: [AuthGuard],  
    data: { title: 'Adicionar Produto' }
  },
  {
    path: 'produto-editar/:id',
    component: ProdutoEditarComponent,
    canActivate: [AuthGuard],  
    data: { title: 'Editar o Produto' }
  },
  {  
    path: 'login',  
    component: LoginComponent,  
    data: {  
      title: 'Login'  
    }  
  },
  {  
    path: '',  
    component: LoginComponent,  
    data: {  
      title: 'Login'  
    }  
  }  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
