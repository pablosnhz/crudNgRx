import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/clients/services/clients.service';
import { AnimalFilter } from 'src/app/models/clients/clientFilters';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit{

  constructor( private clientsService: ClientsService ){}

  ngOnInit(): void {
    this.GetClients();
  }

  GetClients(){
    this.clientsService.loadClients()
    .subscribe((res: AnimalFilter) => {
      console.log(res)
    })
  }

}
