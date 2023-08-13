import { Component, OnInit, Input } from '@angular/core';
import { ChatModel } from '../services/chat.service';

@Component({
  selector: 'app-chats-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() chat?: ChatModel;
  constructor() { }

  ngOnInit() {
  }

}
