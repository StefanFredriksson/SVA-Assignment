import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl: string = 'https://jsonplaceholder.typicode.com/users';
  private subject = new Subject<any>();

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  userSelected(id: number): void {
    this.subject.next(id);
  }

  onUserSelected(): Observable<any> {
    return this.subject.asObservable();
  }
}
