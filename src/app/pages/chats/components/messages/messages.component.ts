import { Component, Input, OnInit, ViewChild, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { ChatHubService } from 'src/app/core/services/chat-hub.service';
import { MessageData, MessageService } from 'src/app/core/services/message.service';
import { MessageDataSource } from '../../services/message-data-source';
import { CdkVirtualScrollViewport, ScrollDispatcher } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesComponent implements OnInit, AfterViewInit {
  @Input() chatId?: string;
  @ViewChild('scrollViewport') virtualScrollViewport?: CdkVirtualScrollViewport;
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
        console.log(data?.getElementRef().nativeElement.scrollTop, data?.getElementRef().nativeElement.scrollHeight, data?.getElementRef().nativeElement.clientHeight, data?.getElementRef().nativeElement.offsetHeight);

        if (scrollTop === 0) {
          this.dataSource?.loadMore();
        }
      });
      setTimeout(() => {
        this.scrollToBottom();
      }, 1000);
  }

  ngOnInit() {
    this.dataSource = new MessageDataSource(this.chatId!, this.messageService, this.chatHubService);
    this.dataSource?.newMessagePushed.subscribe(() => {
      const element = this.virtualScrollViewport?.elementRef.nativeElement;
      if (element && ((element.scrollHeight - element.scrollTop) >= element.clientHeight)) {
        this.scrollToBottom();
      }
    });
    this.authService.getUser()
      .then(user => {
        this.userId = user?.profile.sub;
      });
    this.dataSource?.load();
  }
  private scrollToBottom() {
    this.virtualScrollViewport?.scrollTo({
      bottom: 0,
      behavior: 'smooth'
    });
  }
  trackByFn(index: number, item: MessageData) {
    return item.id;
  }
}
