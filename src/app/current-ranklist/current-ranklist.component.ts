import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-current-ranklist',
  templateUrl: './current-ranklist.component.html',
  styleUrls: ['./current-ranklist.component.css']
})
export class CurrentRanklistComponent implements OnInit {

players = [];
playerId = window.localStorage.getItem('id');
currentCity = window.localStorage.getItem('playerCity')
playersByPoints = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.loadUsers().subscribe(resp => {
      
      this.players = resp.sort((a, b) => {return a.rank - b.rank});
      
      this.playersByPoints = resp.sort((a, b) => {return b.points - a.points});
    });
  }

}
