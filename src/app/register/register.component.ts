import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newUser: User = new User()

  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  createUser(){
    this.userService.createUser(this.newUser).subscribe((userCreated: User) => {
      this.newUser = userCreated;
      console.log(userCreated);
      this.router.navigate(["login"])
    })
  }
}
