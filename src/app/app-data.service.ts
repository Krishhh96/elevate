import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppDataService {
  contactData = [
    {
      name: 'Steve',
      lastName: 'Jobs',
      type: 'Work',
      imgUrl: '../../assets/images/steve.jpg',
      homePhone: '(812) 412 5454',
      workPhone: '(408) 222 3234',
      email: 'steve.jobs@apple.com',
      site: 'Apple.com',
      skype: 'steve_jobs',
    },
    {
      name: 'Mark',
      lastName: 'Zuckerberg',
      type: 'Work',
      imgUrl: '../../assets/images/mark.webp',
      homePhone: '(812) 543 2321',
      workPhone: '(408) 566 2334',
      email: 'mark@facebook.com',
      site: 'Facebook.com',
      skype: 'mark_Zuckerberg',
    },
    {
      name: 'Bill',
      lastName: 'Gates',
      type: 'Work',
      imgUrl: '../../assets/images/bill.jpeg',
      homePhone: '(812) 412 7766',
      workPhone: '(408) 323 4355',
      email: 'gates.bill@microsoft.com',
      site: 'Microsoft.com',
      skype: 'bill_gates',
    },
    {
      name: 'Larry',
      lastName: 'Page',
      type: 'Work',
      imgUrl: '../../assets/images/larry.jpeg',
      homePhone: '(812) 412 7766',
      workPhone: '(408) 323 4355',
      email: 'larry.page@Google.com',
      site: 'Google.com',
      skype: 'larry_page',
    },

    {
      name: 'Scott',
      lastName: 'M',
      type: 'Work',
      imgUrl: '../../assets/images/scott.jpeg',
      homePhone: '(812) 412 7766',
      workPhone: '(408) 323 4355',
      email: 'scott.m@abc.com',
      site: 'Abc.com',
      skype: 'scott__01',
    },
    {
      name: 'Barack',
      lastName: 'Obama',
      type: 'Work',
      imgUrl: '../../assets/images/obama.jpeg',
      homePhone: '(812) 412 7766',
      workPhone: '(408) 323 4355',
      email: 'gates.bill@America.com',
      site: 'America.com',
      skype: 'barack_obama',
    },
    {
      name: 'Elon',
      lastName: 'Musk',
      type: 'Work',
      imgUrl: '../../assets/images/elon.webp',
      homePhone: '(812) 412 4356',
      workPhone: '(408) 444 2121',
      email: 'elon.musk@Tesla.com',
      site: 'Tesla.com',
      skype: 'elon_musk',
    },
  ];

  constructor() {}
}