import { Component, OnInit } from '@angular/core';
import { IProfile} from '../shared/interfaces/profile';
import { UserService } from '../user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentProfile: any;
  currentPlayerId;


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.currentPlayerId = window.localStorage.getItem('id');
    this.userService.loadProfile(this.currentPlayerId).subscribe(resp => {
      
      this.currentProfile = resp;
    });
  }

}
