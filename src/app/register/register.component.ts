import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { IResponse } from '../shared/interfaces/response';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  response: IResponse = null;

  constructor(private userService: UserService,
              private router: Router
    ) { }

  ngOnInit(): void {
  }

  registerHandler(formData) {
    this.userService.register(formData).subscribe(resp => {
      this.response = resp;
      if (this.response.success) {
        setTimeout(() => {
          this.router.navigate(['/login']);
        },2000);
      } else {
        setTimeout(() => {
          this.router.navigate(['/register']);
        },2000);
      }
    })
  }
  
}
