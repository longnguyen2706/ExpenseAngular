import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.less']
})
export class SelectComponent implements OnInit {

  fields = [
    {value: 'steak-0', label: 'Steak'},
    {value: 'pizza-1', label: 'Pizza'},
    {value: 'tacos-2', label: 'Tacos'}
  ];

  selected="";
  constructor() { }
    
  
  ngOnInit() {
  }

}
