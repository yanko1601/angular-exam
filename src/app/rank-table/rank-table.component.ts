import { Component, OnInit } from '@angular/core';
import {playersList} from '../list-players'

@Component({
  selector: 'app-rank-table',
  templateUrl: './rank-table.component.html',
  styleUrls: ['./rank-table.component.css']
})
export class RankTableComponent implements OnInit {

  constructor() { }

  players = playersList;

  ngOnInit(): void {
  }

}
