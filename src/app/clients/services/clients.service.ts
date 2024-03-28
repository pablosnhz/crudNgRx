import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAnimal } from 'src/app/models/clients/clients';
import { AnimalFilter } from 'src/app/models/clients/clientsFilters';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor( private http: HttpClient ) { }

  loadClients( parameters?: AnimalFilter ):Observable<IAnimal>{
    console.log( 'llega hasta el servicio y retorna los animales' );

    return this.http.get<IAnimal>(`${environment.api_url}1`)
  }
}
