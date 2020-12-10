import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userToken: String = this.loggedUserToken;

  get loggedUserToken() {
    return this.userService.loggedUserToken;
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
}
