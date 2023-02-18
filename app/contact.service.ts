import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  // contactList:Contact[] = [
  //   {
  //     id: 1,
  //     title: "Honorable",
  //     first_name: "Angela",
  //     last_name: "Ivell",
  //     email: "aivell0@blogtalkradio.com",
  //     phone1: "6269099421",
  //     phone2: "7183526457",
  //     address: {
  //       line1: "3 Lakewood Gardens Avenue",
  //       line2: "1 Milwaukee Lane",
  //       city: "Pasadena",
  //       state: "California",
  //       zip: "91199",
  //       country: "United States",
  //     },
  //     note: "Marathi",
  //   },
  //   {
  //     id: 2,
  //     title: "Ms",
  //     first_name: "Dorri",
  //     last_name: "Dalling",
  //     email: "ddalling1@bbb.org",
  //     phone1: "3143442309",
  //     phone2: "2514764353",
  //     address: {
  //       line1: "52 Melody Hill",
  //       line2: "7857 Mitchell Road",
  //       city: "Saint Louis",
  //       state: "Missouri",
  //       zip: "63136",
  //       country: "United States",
  //     },
  //     note: "Northern Sotho",
  //   },
  //   {
  //     id: 3,
  //     title: "Ms",
  //     first_name: "Fabien",
  //     last_name: "Semmens",
  //     email: "fsemmens2@tamu.edu",
  //     phone1: "3053386842",
  //     phone2: "6154518295",
  //     address: {
  //       line1: "81 Warrior Lane",
  //       line2: "99234 Rieder Plaza",
  //       city: "Hollywood",
  //       state: "Florida",
  //       zip: "33028",
  //       country: "United States",
  //     },
  //     note: "Malayalam",
  //   },
  //   {
  //     id: 4,
  //     title: "Ms",
  //     first_name: "Tucky",
  //     last_name: "Joutapaitis",
  //     email: "tjoutapaitis3@ftc.gov",
  //     phone1: "8643336478",
  //     phone2: "2285062250",
  //     address: {
  //       line1: "10 Walton Pass",
  //       line2: "99930 Weeping Birch Point",
  //       city: "Spartanburg",
  //       state: "South Carolina",
  //       zip: "29305",
  //       country: "United States",
  //     },
  //     note: "Norwegian",
  //   },
  //   {
  //     id: 5,
  //     title: "Dr",
  //     first_name: "Gloria",
  //     last_name: "Tanman",
  //     email: "gtanman4@redcross.org",
  //     phone1: "2107958791",
  //     phone2: "7191188255",
  //     address: {
  //       line1: "2457 Starling Center",
  //       line2: "76 Cardinal Center",
  //       city: "San Antonio",
  //       state: "Texas",
  //       zip: "78235",
  //       country: "United States",
  //     },
  //     note: "Kurdish",
  //   },
  //   {
  //     id: 6,
  //     title: "Rev",
  //     first_name: "Candi",
  //     last_name: "Austwick",
  //     email: "caustwick5@ed.gov",
  //     phone1: "4125503125",
  //     phone2: "9373866279",
  //     address: {
  //       line1: "9 Aberg Terrace",
  //       line2: "6 Scott Crossing",
  //       city: "Pittsburgh",
  //       state: "Pennsylvania",
  //       zip: "15225",
  //       country: "United States",
  //     },
  //     note: "Persian",
  //   },
  //   {
  //     id: 7,
  //     title: "Dr",
  //     first_name: "Lauren",
  //     last_name: "Brahmer",
  //     email: "lbrahmer6@oaic.gov.au",
  //     phone1: "3108315418",
  //     phone2: "8431225837",
  //     address: {
  //       line1: "4 Coolidge Place",
  //       line2: "5 Delaware Hill",
  //       city: "Inglewood",
  //       state: "California",
  //       zip: "90398",
  //       country: "United States",
  //     },
  //     note: "Mongolian",
  //   },
  //   {
  //     id: 8,
  //     title: "Dr",
  //     first_name: "Stevana",
  //     last_name: "Barrand",
  //     email: "sbarrand7@bloglines.com",
  //     phone1: "7163231225",
  //     phone2: "6159714454",
  //     address: {
  //       line1: "1 Chive Street",
  //       line2: "7 David Parkway",
  //       city: "Buffalo",
  //       state: "New York",
  //       zip: "14215",
  //       country: "United States",
  //     },
  //     note: "Dutch",
  //   },
  //   {
  //     id: 9,
  //     title: "Rev",
  //     first_name: "Daryl",
  //     last_name: "Pegden",
  //     email: "dpegden8@friendfeed.com",
  //     phone1: "5714409559",
  //     phone2: "4144900744",
  //     address: {
  //       line1: "763 Havey Terrace",
  //       line2: "8631 Cordelia Way",
  //       city: "Falls Church",
  //       state: "Virginia",
  //       zip: "22047",
  //       country: "United States",
  //     },
  //     note: "Norwegian",
  //   },
  //   {
  //     id: 10,
  //     title: "Honorable",
  //     first_name: "Cate",
  //     last_name: "Coddrington",
  //     email: "ccoddrington9@kickstarter.com",
  //     phone1: "2518506680",
  //     phone2: "3048677962",
  //     address: {
  //       line1: "44358 Stone Corner Point",
  //       line2: "5698 Mcbride Pass",
  //       city: "Mobile",
  //       state: "Alabama",
  //       zip: "36616",
  //       country: "United States",
  //     },
  //     note: "Assamese",
  //   },
  // ];


  constructor(private http:HttpClient) { }

  getContactList() : Observable<Contact[]> {
    return this.http.get<Contact[]>("url","header or anything else") ;
  }

  getContactDetails(id:number){
    return ;
  }
  
}
