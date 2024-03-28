import { ActionReducerMap } from "@ngrx/store";
import { appState } from "../models/appState/appState";
import { clientsReducer } from "./reducers/clients/clients.reducers";

export const reducers: ActionReducerMap<appState> = {
  clients: clientsReducer
}
