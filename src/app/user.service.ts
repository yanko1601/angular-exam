import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPlayer } from './shared/interfaces/playersList';
import { IResponse } from './shared/interfaces/response';
import { tap } from 'rxjs/operators';
import { IProfile } from './shared/interfaces/profile';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggedPlayer = null;
  currentPlayerId;

  get playerLogged() {
    return this.loggedPlayer;
  }

  get userId() {
    return this.loggedPlayer.loggedUserName.id;
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
        window.localStorage.setItem('isLogged', 'true');
        window.localStorage.setItem('playerName', user.loggedUserName.name);
        window.localStorage.setItem('id', user.loggedUserName.id);
        window.localStorage.setItem('playerCity', user.userCity);
        window.localStorage.setItem('role', user.role);
      }));
  }

  loadProfile(id): Observable<any> {
    return this.http.get<any>('https://exam-softuni.herokuapp.com/player/' + id)
  }
}
