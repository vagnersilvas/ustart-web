import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';


import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { CadProdutosComponent } from './pages/cad-produtos/cad-produtos.component';

@NgModule({
  declarations: [
    ProdutosComponent,
    CadProdutosComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    NzPageHeaderModule,
    NzLayoutModule,    
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzCheckboxModule,
    NzInputModule,
    NzButtonModule,
    NzGridModule,       
    NzTableModule,
    NzPaginationModule,
    NzIconModule,
    NzSpinModule,
    NzImageModule,
    NzSelectModule
  ]
})
export class ProdutosModule { }
