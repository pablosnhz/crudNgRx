import {  IAnimal } from "../clients/clients";

export interface appState {
  //! lo vinculamos al client.ts del models
  clients: IAnimal[]
}
