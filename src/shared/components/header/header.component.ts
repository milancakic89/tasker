import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tasker-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @Input() navOpened = false;

  ngOnInit(): void {
  }

}
