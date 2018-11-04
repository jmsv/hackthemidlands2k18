import { Component, OnInit, HostListener, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import axios from 'axios';

export interface DialogData {
  token: string;
}

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {

  launchCode: String = '';
  token: string;
  fireSelected: Boolean = false;
  primingToken: String = '';

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(Dialog2FAComponent, {
      width: '600px',
      data: { name: this.token }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.token = result;
    });
  }

  @HostListener('document:keyup', ['$event'])
  @HostListener('document:keydown', ['$event'])
  trigger(event) {
    if (
      event.type === 'mousedown'
      || event.type === 'keydown'
      && event.code === 'Enter'
    ) {
      console.log('fire!');
      this.fire();
    } else {
      this.unfire();
    }
  }

  fire() {
    this.fireSelected = true;
    setTimeout(() => {
      this.openDialog();
      this.fireSelected = false;
    }, 200);

    axios.post('http://internet-of-flings.com/api/getToken', {
      priming_code: this.launchCode
    }).then(res => {
      console.log(res.data);
      this.primingToken = res.data;
    });
  }

  unfire() {
    this.fireSelected = false;
  }

  ngOnInit() {
  }
}


@Component({
  selector: 'app-2fa-dialog',
  styleUrls: ['2fa-dialog.css'],
  templateUrl: '2fa-dialog.html',
})
export class Dialog2FAComponent {
  constructor(
    public dialogRef: MatDialogRef<Dialog2FAComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
