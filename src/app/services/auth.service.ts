import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../model/user';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

export const ANONYMOUS_USER: User = {
    id: null,
    username: '',
    password: '',
    active: null
};

@Injectable()
export class AuthService {
  private subject = new BehaviorSubject<User>(ANONYMOUS_USER);

  user$: Observable<User> = this.subject.asObservable();

  isLoggedIn$: Observable<boolean> = this.user$.map(user => !!user.id);

  isLoggedOut$: Observable<boolean> = this.isLoggedIn$.map(isLoggedIn => !isLoggedIn);

  constructor(private http: HttpClient) {

  }

  signup(username: string, password: string) {
    return this.http.post<User>('http://localhost:5000/register', {username, password}).shareReplay()
      .do( user => this.subject.next(user));

    //sharePlay caches the http request and avoid multiple http request call.
  }

}
