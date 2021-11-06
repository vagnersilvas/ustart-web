import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { CadClienteComponent } from './pages/cad-cliente/cad-cliente.component';


@NgModule({
  declarations: [
    ClienteComponent,
    CadClienteComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule
  ]
})
export class ClienteModule { }
