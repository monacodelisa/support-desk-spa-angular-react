import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  searchTerm = "";
  users: User[] = [];

  constructor(private peopleService: PeopleService) {}

  search() {
    this.peopleService.filterUsers(this.searchTerm);
  }
}
