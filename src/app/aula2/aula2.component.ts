import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aula2',
  templateUrl: './aula2.component.html',
  styleUrls: ['./aula2.component.css']
})
export class Aula2Component implements OnInit {

  constructor() {
    console.log('constructor')
  }

  ngOnInit(): void {
    console.log('ngOnInit')
  }


  teste(): void {
    console.log('click btn')
  }

  teste2(): void {
    console.log('on fucos')
  }

}
