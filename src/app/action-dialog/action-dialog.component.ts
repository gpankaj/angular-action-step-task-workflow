import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Iaction} from '../action-card-list/action';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'action-dialog',
  templateUrl: './action-dialog.component.html',
  styleUrls: ['./action-dialog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ActionDialogComponent implements OnInit {

  form: FormGroup;
  action: Iaction;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<ActionDialogComponent>, @Inject(MAT_DIALOG_DATA) action: Iaction ) {
    this.action = action['action'];
    console.log(action['action']);
    this.form = fb.group({
      name: [this.action.name, Validators.required],
      actionScript: [this.action.action_script],
      active: [this.action.active],

    });
  }

  ngOnInit() {
  }
  close() {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close();
  }
}
