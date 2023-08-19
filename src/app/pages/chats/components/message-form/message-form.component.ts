import { Component, OnInit, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService, PostMessageDTO } from 'src/app/core/services/message.service';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {
  @Input() chatId?: string;
  @Input() message?: PostMessageDTO;
  form?: FormGroup;
  isLoading = false;
  constructor(
    private fb: FormBuilder,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.buildForm(this.message);
  }
  private buildForm(message?: PostMessageDTO) {
    this.form = this.fb.group({
      chatId: this.fb.control(this.chatId),
      content: this.fb.control(message?.content ?? '', [Validators.required, Validators.maxLength(4096)]),
      replyTo: this.fb.control(message?.replyTo ?? '')
    });
  }

  onSubmit() {
    if (!this.form || this.form?.invalid || this.isLoading) return;
    this.isLoading = true;
    this.messageService.send(this.form.value)
      .subscribe({
        next: (msg) => {
          this.form?.reset({
            chatId: this.chatId
          })
        },
        complete: () => {
          this.isLoading = false;
        }
      })
  }

  enterForm(event: any) {
    if (event.ctrlKey && event.keyCode === 13) {
      this.onSubmit();
    }
  }
}
