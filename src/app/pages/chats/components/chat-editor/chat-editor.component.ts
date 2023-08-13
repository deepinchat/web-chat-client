import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChatModel, ChatService, ChatType } from '../../services/chat.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-chat-editor',
  templateUrl: './chat-editor.component.html',
  styleUrls: ['./chat-editor.component.scss']
})
export class ChatEditorComponent implements OnInit {
  form?: FormGroup;
  isLoading = false;
  isSubmitting = false;
  isEdit: boolean;
  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { id?: string, type: ChatType } = { type: ChatType.Group },
    private dialogRef: MatDialogRef<ChatEditorComponent>,
    private snackBar: MatSnackBar,
    private chatService: ChatService
  ) {
    this.isEdit = !!this.data.id;
  }
  private buildForm(chat?: ChatModel) {
    this.form = this.fb.group({
      name: this.fb.control(chat?.name, [Validators.required, Validators.maxLength(16)]),
      link: this.fb.control(chat?.link, [Validators.minLength(4), Validators.maxLength(32)]),
      description: this.fb.control(chat?.description, [Validators.maxLength(512)]),
      type: this.fb.control(this.data.type),
      isPrivate: this.fb.control(chat ? chat.isPrivate : false),
    })
  }

  async ngOnInit() {
    if (this.data.id) {
      this.chatService.getById(this.data.id)
        .subscribe({
          next: (chat) => {
            this.buildForm(chat);
          }
        })
    } else {
      this.buildForm();
    }
  }

  onSubmit() {
    if (!this.form || this.form.invalid || this.isSubmitting)
      return
    this.isSubmitting = true;
    this.chatService.create(this.form.value)
      .subscribe({
        next: (res) => {
          this.snackBar.open(`${this.data.type === 2 ? 'Group' : 'Channel'} created.`);
          this.dialogRef.close(true);
        },
        complete: () => {
          this.isSubmitting = false;
        }
      })
  }

}
