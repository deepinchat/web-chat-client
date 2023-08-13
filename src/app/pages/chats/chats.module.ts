import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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

import { ChatsComponent } from './chats.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { MembersComponent } from './members/members.component';
import { MessagesComponent } from './messages/messages.component';
import { SettingsComponent } from './settings/settings.component';
import { ChatsRoutingModule } from './chats-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatService } from './services/chat.service';
import { ChatEditorComponent } from './components/chat-editor/chat-editor.component';
import { ChatListComponent } from './components/chat-list/chat-list.component';
import { RoomComponent } from './room/room.component';

@NgModule({
  imports: [
    HttpClientModule,
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

    SharedModule,
    ChatsRoutingModule
  ],
  declarations: [
    ChatsComponent,
    ChatListComponent,
    RoomComponent,
    HeaderComponent,
    MembersComponent,
    MessagesComponent,
    SettingsComponent,
    ChatEditorComponent
  ],
  providers: [
    ChatService
  ]
})
export class ChatsModule { }
