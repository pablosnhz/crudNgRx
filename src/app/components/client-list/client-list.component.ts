import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { appState } from "src/app/models/appState/appState";
import { IAnimal } from "src/app/models/clients/clients";

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit{

  clientes: IAnimal[] = [];

  // ! en vez de llamar al clientsService que tenia antes, ahora Store<AppState> para dejar de
  // ! llamar servicios en el constructor, esto lo pasamos a clients.component
  constructor( private store: Store<appState> ){}

  ngOnInit(): void {
    this.buildClientsTable();
  }

  buildClientsTable(): void {
    this.store.select( appState =>  appState.clients)
    .subscribe(( clients ) => {
      console.log(`llegan los clientes`, clients)
      this.clientes = clients;
    })
  }

  deleteClient(id: number):void{
    console.log(`eliminamos cliente con el id: `, id)
  }

  updateClient(id: number):void{
    console.log(`actualizamos el cliente con el id`, id)
  }

}
