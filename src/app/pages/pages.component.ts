import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatHubService } from '../core/services/chat-hub.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit, OnDestroy {

  constructor(
    private chatHubService: ChatHubService
  ) { }

  ngOnDestroy() {
    this.chatHubService.stop();
  }

  ngOnInit() {
    this.chatHubService.start();
  }

}
