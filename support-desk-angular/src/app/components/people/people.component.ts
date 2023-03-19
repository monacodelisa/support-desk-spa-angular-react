import { Component, OnInit, HostBinding, HostListener } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/models/user';
import { PeopleService } from 'src/app/services/people.service';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  @HostBinding('class.show-details') showDetails = false;

  // @HostListener('mouseenter') onMouseEnter() {
  //   this.showDetails = true;
  // }

  // @HostListener('mouseleave') onMouseLeave() {
  //   this.showDetails = false;
  // }

  hoveredCardIndex: number | null = null;

  // to add when a user image has not been provided, looks a bit nicer
  placehldrImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNfVmXySPJQ-xv4oY0in48YpkLIA8_yyj95p6uLW53EqTBBQAESYi68ElFFzo6dvmERXc&usqp=CAU"


  searchTerm = '';

  users$: Observable<User[]> = of([]);
  filteredUsers$: Observable<User[]> = of([]);
  searchCalled: boolean = false;

  constructor(private peopleService: PeopleService) {}

  ngOnInit() {
    this.users$ = this.peopleService.users$;
    this.filteredUsers$ = this.peopleService.filteredUsers$;
    this.peopleService.searchCalled$.subscribe(searchCalled => {
      this.searchCalled = searchCalled;
    });
    this.peopleService.getUsers().subscribe(users => {
      this.peopleService.usersSource.next(users);
    });
  }

  onFilter() {
    this.peopleService.filterUsers(this.searchTerm);
    console.log(this.filteredUsers$)
  }
}


