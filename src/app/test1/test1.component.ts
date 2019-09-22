import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
@Input('parentData') public name;
@Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
firevent()
{
  this.childEvent.emit('hey');
}
}
