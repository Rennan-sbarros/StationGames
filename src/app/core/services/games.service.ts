import { environment } from './../../../environments/environment';
import { Games } from './../../shared/models/games';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API = environment.BASE_URL;

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  constructor(private http: HttpClient) {}

  getGames(): Observable<Games> {
    return this.http.get<Games>(`${API}`);
  }
}
