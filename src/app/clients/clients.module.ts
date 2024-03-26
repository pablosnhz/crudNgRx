import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsComponent } from './pages/clients/clients.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientByIdComponent } from '../components/client-by-id/client-by-id.component';
import { ClientListComponent } from '../components/client-list/client-list.component';
import { ClientUpdateComponent } from '../components/client-update/client-update.component';
import { ClientComponent } from '../components/client/client.component';


@NgModule({
  declarations: [
    ClientsComponent,
    ClientComponent,
    ClientByIdComponent,
    ClientUpdateComponent,
    ClientListComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule
  ]
})
export class ClientsModule { }
