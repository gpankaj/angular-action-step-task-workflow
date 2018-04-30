import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ActionService} from '../action.service';
import {Iaction} from '../action-card-list/action';

@Component({
  selector: 'action-card-list',
  templateUrl: './action-card-list.component.html',
  styleUrls: ['./action-card-list.component.css']
})
export class ActionCardListComponent implements OnInit {

  @Input()
  actions: Iaction[];

  constructor(private actionService: ActionService) { }

  ngOnInit() {
    this.actionService.loadActions()
      .subscribe(actions => this.actions = actions);
  }

}
