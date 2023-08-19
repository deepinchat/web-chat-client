import { Component, ElementRef, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { ChatHubService } from 'src/app/core/services/chat-hub.service';
import { MessageService } from 'src/app/core/services/message.service';
import { MessageDataSource } from '../../services/message-data-source';
import { ScrollDispatcher } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit, AfterViewInit {
  @Input() chatId?: string;
  @ViewChild('messageList') messageList?: ElementRef;
  userId?: string;
  dataSource?: MessageDataSource;

  constructor(
    private messageService: MessageService,
    private authService: AuthService,
    private chatHubService: ChatHubService,
    private scrollDispatcher: ScrollDispatcher
  ) {
  }
  ngAfterViewInit(): void {
    this.scrollDispatcher.scrolled()
      .subscribe((data) => {
        const scrollTop = data?.getElementRef().nativeElement.scrollTop;
        if (scrollTop === 0) {
          this.dataSource?.loadMore();
        }
      })
  }

  ngOnInit() {
    this.dataSource = new MessageDataSource(this.chatId!, this.messageService, this.chatHubService);
    this.authService.getUser()
      .then(user => {
        this.userId = user?.profile.sub;
      });
    this.dataSource?.load();
  }

}
