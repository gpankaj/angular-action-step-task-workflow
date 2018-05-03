import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ActionService} from '../action.service';
import {Iaction} from '../action-card-list/action';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {ActionDialogComponent} from '../action-dialog/action-dialog.component';

@Component({
  selector: 'action-card-list',
  templateUrl: './action-card-list.component.html',
  styleUrls: ['./action-card-list.component.css']
})
export class ActionCardListComponent implements OnInit {

  @Input()
  actions: Iaction[];


  constructor(private actionService: ActionService, private dialog: MatDialog) {

  }

  ngOnInit() {
    this.actionService.loadActions()
      .subscribe(actions => this.actions = actions);
  }

  editAction(action: Iaction) {
    const dialogConfig = new MatDialogConfig();
    //dialogConfig. = true;
    dialogConfig.data = {
      action
    };

    const dialogRef = this.dialog.open(ActionDialogComponent, dialogConfig );
  }
}
