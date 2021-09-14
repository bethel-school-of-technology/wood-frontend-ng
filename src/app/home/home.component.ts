import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  getUser: User = new User()


  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  User(){
    this.userService.getUser(this.getUser).subscribe((userLoggedIn) => {
      this.getUser = userLoggedIn;
      console.log(userLoggedIn);
      this.router.navigate(["login"])
    })
  }
}


