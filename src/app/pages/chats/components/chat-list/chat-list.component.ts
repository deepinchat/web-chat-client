import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChatModel, ChatService } from 'src/app/core/services/chat.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {
  query: { keywords: string } = { keywords: '' };
  chats: ChatModel[] = [];
  isLoading = false;
  form?: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private chatService: ChatService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      keywords: this.fb.control('', [Validators.maxLength(256)])
    });
    this.loadChats();
  }

  private loadChats() {
    if (this.isLoading) {
      return;
    }
    this.isLoading = true;
    this.chatService.getList()
      .subscribe({
        next: (res) => {
          this.chats = res;
        },
        complete: () => {
          this.isLoading = false;
        }
      });
  }

  onQuery() {
    if (this.form?.valid) {
      // this.router.navigate(['/p', 'search'], {
      //   queryParams: {
      //     keywords: this.form.value.keywords
      //   }
      // })
    }
  }
}
