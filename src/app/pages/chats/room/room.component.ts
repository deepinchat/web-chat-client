import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatModel, ChatService } from 'src/app/core/services/chat.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  chat?: ChatModel;
  isLoading = false;
  constructor(
    private route: ActivatedRoute,
    private chatService: ChatService
  ) {

  }

  private loadData(chatId?: string) {
    if (this.isLoading || !chatId) return;
    this.chatService.getById(chatId)
      .subscribe({
        next: (res) => {
          this.chat = res;
        },
        complete: () => {
          this.isLoading = false;
        }
      })

  }
  ngOnInit() {
    this.route.paramMap.subscribe(p => {
      if (p.has('id')) {
        this.loadData(p.get('id') || '');
      }
    })
  }

}
