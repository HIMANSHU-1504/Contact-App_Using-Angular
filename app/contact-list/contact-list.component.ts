import { Component, EventEmitter, Injectable, Input, OnInit, Output } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: "app-contact-list",
  templateUrl: "./contact-list.component.html",
  styleUrls: ["./contact-list.component.css"],
})
export class ContactListComponent implements OnInit {
 
  constructor(private contactService : ContactService) {}

contactList : Contact[] = [];

  ngOnInit(): void {
    this.contactService.getContactList().subscribe(res => {
      this.contactList = res;
    });
  }
}
