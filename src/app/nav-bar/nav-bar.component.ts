import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  playerCity = window.localStorage.getItem('playerCity');
  playerName = window.localStorage.getItem('playerName');
  isLogged = window.localStorage.getItem('isLogged');
  playerId = window.localStorage.getItem('id');
  playerRole = window.localStorage.getItem('role');


  constructor(  private userService: UserService, 
                private router: Router) { }

  ngOnInit(): void {
  
  }

  logOutHandler() {
    window.localStorage.clear();
    this.router.navigate(['/']);

  }
}