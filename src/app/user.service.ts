import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPlayer } from './shared/interfaces/playersList';
import { IResponse } from './shared/interfaces/response';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggedPlayer = null;

  get playerLogged() {
    return this.loggedPlayer;
  }

  constructor(private http: HttpClient) { }

  loadUsers(): Observable<IPlayer[]> {
    return this.http.get<IPlayer[]>('https://exam-softuni.herokuapp.com/player/all');
  }

  register(player: IPlayer): Observable<IResponse> {
    return this.http.post<IResponse>(`https://exam-softuni.herokuapp.com/register`, player);
    }
  
  loginPlayer(loginPlayer) {
    return this.http.post<any>('https://exam-softuni.herokuapp.com/login', loginPlayer).pipe(
      tap((user) => {
        this.loggedPlayer = user;
        console.log(this.loggedPlayer);
      }));
  }
}
