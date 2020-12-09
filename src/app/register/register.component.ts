import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IResponse } from '../response';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  response: IResponse = null;

  constructor(private userService: UserService
    ) { }

  ngOnInit(): void {
  }

  registerHandler(formData) {
    this.userService.register(formData).subscribe(resp => {
      this.response = resp;
    })
    console.log(this.response);
  }

}
