import { createReducer, on } from "@ngrx/store";
import { IAnimal } from "src/app/models/clients/clients";
import { getClientsSuccess } from "../../actions/clients/clients.actions";

export interface ClientsState {
  clients: IAnimal
}

const initialState: IAnimal[] = [];

export const clientsReducer = createReducer(
  initialState,

  on( getClientsSuccess, ( state, {clients} ) => {
    console.log(state);
    console.log(clients);


    state = clients;
    return state
  })
)
