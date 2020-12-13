import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProfile} from '../shared/interfaces/profile';
import { UserService } from '../user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentProfile: IProfile;
  currentPlayerId;


  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.currentPlayerId = window.localStorage.getItem('id');
    this.userService.loadProfile(id).subscribe(resp => {
      
      this.currentProfile = resp;
    });
  }

}
