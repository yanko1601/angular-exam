import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  allGames;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.loadGames().subscribe(res => 
      this.allGames = res);
  }

}
