import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  @Input() public parData;

  allGames;
  isAdmin = (window.localStorage.getItem('role') === 'ADMIN');

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.loadGames().subscribe(res => 
      this.allGames = res);
  }

}
