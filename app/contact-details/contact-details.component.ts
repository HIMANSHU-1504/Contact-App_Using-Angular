import { Component, Input, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {


  haveRights:boolean = false;

  contact: any =[];

  constructor(private route: ActivatedRoute, private contactService: ContactService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.contact = this.contactService.getContactDetails(id).subscribe(res =>{
      this.contact = res;
    });
  }
  
}
