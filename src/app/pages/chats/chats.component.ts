import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChatEditorComponent } from './components/chat-editor/chat-editor.component';
import { ChatListComponent } from './components/chat-list/chat-list.component';
import { ChatType } from 'src/app/core/services/chat.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {
  @ViewChild(ChatListComponent) chatList?: ChatListComponent;
  constructor(
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {

  }

  createOrEditChat(chatType: ChatType, id?: string) {
    const dialogRef = this.matDialog.open(ChatEditorComponent, {
      data: {
        id,
        type: chatType
      }
    });
    dialogRef.afterClosed().subscribe({
      next: (saved) => {
        if (saved) {
          this.chatList?.onQuery();
        }
      }
    })
  }
}
