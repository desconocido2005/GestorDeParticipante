import { Participante } from './../interface/participante';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PracticipanteService {

  private url = `${environment.backurl}`;

  constructor(private http: HttpClient) { }


  findAll(): Observable<Participante[]>{
    return this.http.get<Participante[]>(this.url);
  }

  save(participante: Participante): Observable<Participante>{
    return this.http.post<Participante>(`${this.url}/save`, participante);
  }
  update(participante: Participante): Observable<Participante>{
    return this.http.put<Participante>(`${this.url}/update`, participante);
  }
  delete(id: number): Observable<Participante>{
    return this.http.delete<Participante>(`${this.url}/delete/${id}`);
  }
}
