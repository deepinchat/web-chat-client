import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { ChatHubService } from '../core/services/chat-hub.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit, OnDestroy {

  constructor(
    private chatHubService: ChatHubService,
    private render: Renderer2
  ) { }

  onResize(e: any) {
    console.log(e);
  }
  // private registerSliderResize() {
  //   this.render.
  // }

  ngOnDestroy() {
    this.chatHubService.stop();
  }

  ngOnInit() {
    this.chatHubService.start();
  }

}
