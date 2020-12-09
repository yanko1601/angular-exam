import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPlayer } from './playersList';
import { IResponse } from './response';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  loadUsers(): Observable<IPlayer[]> {
    return this.http.get<IPlayer[]>('https://exam-softuni.herokuapp.com/player/all');
  }

  register(player: IPlayer): Observable<IResponse> {
    return this.http.post<IResponse>(`https://exam-softuni.herokuapp.com/register`, player);
    }
    
}
