import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css']
})
export class ContactAddComponent implements OnInit {

  fname: String = "Parul";

  constructor() { }

  ngOnInit(): void {
  }

}
