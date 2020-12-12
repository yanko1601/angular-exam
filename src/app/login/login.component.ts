import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { IResponse } from '../shared/interfaces/response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  response: IResponse = null;

  constructor(private userService: UserService,
              private router: Router
    ) { }

  ngOnInit(): void {
  }

  loginHandler(formData) {
    this.userService.loginPlayer(formData).subscribe(resp => {
      this.response = resp;
      if (this.response.success) {
        setTimeout(() => {
          this.router.navigate(['currentranklist']);
        },3000);
      } else {
        setTimeout(() => {
          this.router.navigate(['login']);
        },3000);
      }
    }
    )
  }

}
