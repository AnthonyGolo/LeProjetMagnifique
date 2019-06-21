import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  plus: boolean = true;
  form: boolean = false;
  data: object = {};

  constructor() { }

  ngOnInit() {
  }

  showForm(event) {
    this.form = event;
    this.plus = !event;
  }

  addEntry(event) {
    this.data = event;
  }
}

// TODO: 
