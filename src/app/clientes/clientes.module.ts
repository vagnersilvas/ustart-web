import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { CadClienteComponent } from './pages/cad-cliente/cad-cliente.component';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';
<<<<<<< HEAD
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzSelectModule } from 'ng-zorro-antd/select';
=======
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NgxMaskModule } from 'ngx-mask';
import { ClienteComponent } from './pages/clientes/clientes.component';
>>>>>>> 28f2b594553bc88e935d7bb11072522ee6bf918b


@NgModule({
  declarations: [
    ClienteComponent,
    CadClienteComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
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
<<<<<<< HEAD
    NzImageModule,
    NzSelectModule
=======
    NzSelectModule,
    NzRadioModule,
    NgxMaskModule.forRoot()
>>>>>>> 28f2b594553bc88e935d7bb11072522ee6bf918b
  ]
})
export class ClientesModule { }
