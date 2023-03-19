import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { PeopleService } from 'src/app/services/people.service';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  users: User[] = [];
  available = "../../../assets/icon-available.svg"
  busy = "../../../assets/icon-busy.svg"

  constructor(private peopleService: PeopleService) {}

  ngOnInit() {
    this.peopleService.getUsers().subscribe(users => {
      this.users = users;
      console.log(this.users);
    });
  }
}
