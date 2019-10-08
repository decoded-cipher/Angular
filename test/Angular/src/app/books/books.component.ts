import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books=['Randamoozham','Araachaar','Oru Deshattinte Kadha','Fairy Tales','Panchatantra','The Master Algorithm'];
  constructor() { }

  ngOnInit() {
  }

}
