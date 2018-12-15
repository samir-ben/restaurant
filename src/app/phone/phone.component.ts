import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() phone: string;
  @Input() role: string;
  @Output() phoneNumber = new EventEmitter<String>();

  constructor() {}

  ngOnInit() {}

  callbackPhone() {
    this.phoneNumber.emit(this.phone);
  }
}
