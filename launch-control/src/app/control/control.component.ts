import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {

  constructor() { }

  fireSelected = false;

  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    console.log(event);
  }

  @HostListener('document:keyup', ['$event'])
  @HostListener('document:keydown', ['$event'])
  trigger(event) {
    console.log(event);
    if (
      event.type === 'mousedown'
      || event.type === 'keydown'
      && (
        event.code === 'Enter'
        || event.code === 'Space'
        || event.code === 'KeyF'
      )
    ) {
      console.log('fire!');
      this.fire();
    } else {
      this.unfire();
    }
  }

  fire() {
    this.fireSelected = true;
  }

  unfire() {
    this.fireSelected = false;
  }

  ngOnInit() {
  }

}
