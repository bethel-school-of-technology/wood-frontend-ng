import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-watercooler',
  templateUrl: './watercooler.component.html',
  styleUrls: ['./watercooler.component.css']
})

export class WatercoolerComponent implements OnInit {
  username = 'username'
  messages = [];
  message = '';

  constructor(private http: HttpClient) { }

  testLog(): void { body:{
    username: this.username
    message: this.message
  }
  console.log(this.message)
  }

   submit(): void{
  /*   this.http.post('http://localhost:8080/api/messages', body:{
      username: this.username,
      message: this.message
    }).subscribe(next: () => this.message = ''); */
  }

  ngOnInit(): void {
  }

}
