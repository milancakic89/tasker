import { Component, Input, OnInit } from '@angular/core';

type Icon = 'edit' | 'delete' | '';

@Component({
  selector: 'icon-btn',
  templateUrl: './icon-btn.component.html',
  styleUrls: ['./icon-btn.component.scss']
})
export class IconBtnComponent implements OnInit {

  constructor() { }

  @Input() icon: Icon = '';

  ngOnInit(): void {
  }

}
