import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})

export class SmallCardComponent implements OnInit {

  @Input()
  photo:string = '';
  @Input()
  autor:string = '';
  @Input()
  title:string = '';

  constructor() { }


  ngOnInit(): void {
  }

}
