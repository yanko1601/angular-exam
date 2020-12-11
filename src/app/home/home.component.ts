import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ILoggedPlayer } from '../shared/interfaces/loggedPlayer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentPlayer = this.currPlayer;

  get currPlayer() {
    return this.userService.playerLogged;
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
}
