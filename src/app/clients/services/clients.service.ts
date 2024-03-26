import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAnimal } from 'src/app/models/clients/client';
import { AnimalFilter } from 'src/app/models/clients/clientFilters';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor( private http: HttpClient ) { }

  loadClients( parameters?: AnimalFilter ):Observable<IAnimal>{
    return this.http.get<IAnimal>(`${environment.url}1`)
  }
}
