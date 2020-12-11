import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-rank-table',
  templateUrl: './rank-table.component.html',
  styleUrls: ['./rank-table.component.css']
})
export class RankTableComponent implements OnInit {

 players = [];
 playerId = window.localStorage.getItem('id');
 listOfCities = [];
 playersByPoints = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.loadUsers().subscribe(resp => {
      
      this.players = resp.sort((a, b) => {return a.rank - b.rank});
      this.players.forEach(pl => {
        if (!this.listOfCities.includes(pl.city)) {
          this.listOfCities.push(pl.city)
        } 
      })
      this.playersByPoints = resp.sort((a, b) => {return b.points - a.points});
      console.log('players by points: ' + this.playersByPoints );
    })
  }
}
