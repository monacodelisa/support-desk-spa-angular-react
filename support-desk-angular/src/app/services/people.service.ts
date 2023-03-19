import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private apiUrl = 'assets/api.json';

  public usersSource = new BehaviorSubject<User[]>([]);
  users$ = this.usersSource.asObservable();

  private filteredUsersSource = new BehaviorSubject<User[]>([]);
  filteredUsers$ = this.filteredUsersSource.asObservable();

  private searchCalledSource = new BehaviorSubject<boolean>(false);
  searchCalled$ = this.searchCalledSource.asObservable();

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  filterUsers(searchTerm: string) {
    const users = this.usersSource.getValue();

    const filteredUsers = users.filter(user => {
      const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
      return fullName.includes(searchTerm.toLowerCase());
    });

    this.filteredUsersSource.next(filteredUsers);
    this.searchCalledSource.next(true);
  }

}
