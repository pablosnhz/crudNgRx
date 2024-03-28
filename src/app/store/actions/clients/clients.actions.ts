import { createAction, props } from "@ngrx/store";
import { IAnimal } from "src/app/models/clients/clients";
import { AnimalFilter } from "src/app/models/clients/clientsFilters";

export const getClients = createAction(
  '[Clients] Get Clients',
  props<{ parameters?: AnimalFilter }>()
)


// ! el sucucess le va a pasar una lista al Reducer clients.reducer.ts
export const getClientsSuccess = createAction(
  '[Clients] Get Clients Sucess',
  props<{ clients: IAnimal[] }>()
)
