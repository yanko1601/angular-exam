import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-rank-table',
  templateUrl: './rank-table.component.html',
  styleUrls: ['./rank-table.component.css']
})
export class RankTableComponent implements OnInit {

 players = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.loadUsers().subscribe(resp => {
      
      this.players = resp;
    })
  }
}
