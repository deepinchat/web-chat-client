import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChatDatePipe } from './pipes/chat-date.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ChatDatePipe
  ],
  exports: [
    CommonModule,
    RouterModule,
    ChatDatePipe
  ],
  providers: [
    DatePipe
  ]
})
export class SharedModule { }
