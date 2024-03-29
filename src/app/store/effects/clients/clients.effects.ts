import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ClientsService } from "src/app/clients/services/clients.service";
import { getClients, getClientsSuccess } from "../../actions/clients/clients.actions";
import { catchError, concatMap, map, of, tap } from "rxjs";

@Injectable()

export class ClientsEffects {
  constructor( private clientsService: ClientsService, private actions$: Actions){}

  loadClient$ = createEffect(() => {
    return this.actions$
    .pipe(
      ofType(getClients),
      tap(( params ) => console.log(params)),
      concatMap(( action ) => {
        // console.log(action);
        const { parameters } = action;

        return this.clientsService.loadClients( parameters )
        .pipe(
          map(( clients: any ) => getClientsSuccess({ clients })),
          catchError(( error: any ) => of())
        )
      })
    )
  })


}
