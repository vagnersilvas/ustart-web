import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadProdutosComponent } from './pages/cad-produtos/cad-produtos.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';

const routes: Routes = [
  { path: '', component: ProdutosComponent },
  { path: 'cad-produto', component: CadProdutosComponent },
  { path: 'cad-produto/:id', component: CadProdutosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
