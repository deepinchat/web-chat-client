import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ChatEditorComponent } from './components/chat-editor/chat-editor.component';
import { ChatType } from './services/chat.service';
import { ChatListComponent } from './components/chat-list/chat-list.component';

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
