import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { ChatsComponent } from './chats.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MessagesComponent } from './components/messages/messages.component';
import { ChatsRoutingModule } from './chats-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatEditorComponent } from './components/chat-editor/chat-editor.component';
import { ChatListComponent } from './components/chat-list/chat-list.component';
import { RoomComponent } from './room/room.component';
import { MessageFormComponent } from './components/message-form/message-form.component';
import { HeaderComponent } from './components/header/header.component';
import { MessageDataSource } from './services/message-data-source';

@NgModule({
  imports: [
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatDialogModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatRadioModule,
    ScrollingModule,
    
    SharedModule,
    ChatsRoutingModule
  ],
  declarations: [
    ChatsComponent,
    ChatListComponent,
    RoomComponent,
    MessagesComponent,
    ChatEditorComponent,
    MessageFormComponent,
    HeaderComponent
  ]
})
export class ChatsModule { }
