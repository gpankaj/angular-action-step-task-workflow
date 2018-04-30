import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Iaction} from './action-card-list/action';

@Injectable()
export class ActionService {
  actions;

  constructor(private http: Http) {
    this.loadActions();
  }
  loadActions(): Observable<Iaction[]> {
    return this.http.get('http://localhost:5000/actions')
      .map(res => res.json()['actions']);
  }
}
