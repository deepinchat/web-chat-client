import { Component, Input, OnInit } from '@angular/core';
import { ChatModel } from 'src/app/core/services/chat.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  @Input() chat?: ChatModel;
  constructor() { }

  ngOnInit() {
  }

}
