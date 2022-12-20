import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage implements OnInit{

  name = new FormControl('');
  constructor() { }
  ngOnInit(): void {
  }
public teste() {
  console.log(this.name.value)
}
}
