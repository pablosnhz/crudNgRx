import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { appState } from "src/app/models/appState/appState";
import { getClients } from "src/app/store/actions/clients/clients.actions";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit{

  constructor( private store: Store<appState> ){}

  ngOnInit(): void {
    this.GetClients();
  }

  GetClients(){
    console.log('disparamos la action');
    this.store.dispatch(getClients({  }) );
  }

}
