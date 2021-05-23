import { Component, OnInit } from '@angular/core';
import { faPhone, faSms } from '@fortawesome/free-solid-svg-icons';
import { AppDataService } from '../app-data.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  contactobj: {}[] = [];
  faPhone = faPhone;
  faSms = faSms;
  constructor(private contacts: AppDataService) {}

  ngOnInit(): void {
    this.contactobj = this.contacts.contactData;
  }
}
