import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { appState } from "src/app/models/appState/appState";
import { getClients } from "src/app/store/actions/clients/clients.actions";


@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit{

  // ! en vez de llamar al clientsService que tenia antes, ahora Store<AppState> para dejar de
  // ! llamar servicios en el constructor
  constructor( private store: Store<appState> ){}

  ngOnInit(): void {
    this.GetClients();
  }

  GetClients(){
    console.log('disparamos la action');
    this.store.dispatch( getClients({}) );
  }

}
