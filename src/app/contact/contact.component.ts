import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts = [
    { firstName: 'Karim', lastName: 'Said', role: 'Accueil', phone: '0706060611' },
    { firstName: 'Sam', lastName: 'Ben', role: 'Dirigeant', phone: '0606060607' },
    { firstName: 'Mathias', lastName: 'Lomon', role: 'Manager', phone: '0646060688' }
  ];
  phoneZoom = undefined;

  constructor() { }

  ngOnInit() {
  }
  receivedPhone(phone) {
    this.phoneZoom = phone;
  }

}
