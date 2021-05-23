import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  faCommentDollar,
  faEnvelope,
  faGlobe,
  faPhone,
  faSms,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss'],
})
export class ContactDetailComponent implements OnInit {
  user;
  faPhone = faPhone;
  faSms = faSms;
  faEnvelope = faEnvelope;
  faGlobe = faGlobe;
  faSkype = faCommentDollar;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.user = {
      name: this.route.snapshot.params['name'],
      lastName: this.route.snapshot.params['lastName'],
      homePhone: this.route.snapshot.params['homePhone'],
      workPhone: this.route.snapshot.params['workPhone'],
      email: this.route.snapshot.params['email'],
      site: this.route.snapshot.params['site'],
      skype: this.route.snapshot.params['skype'],
      imgUrl: this.route.snapshot.params['imgUrl'],
    };
  }
}
