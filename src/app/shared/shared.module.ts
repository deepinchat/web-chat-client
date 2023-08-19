import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChatDatePipe } from './pipes/chat-date.pipe';
import { SubStringPipe } from './pipes/sub-string.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ChatDatePipe,
    SubStringPipe
  ],
  exports: [
    CommonModule,
    RouterModule,
    ChatDatePipe,
    SubStringPipe
  ],
  providers: [
    DatePipe,
  ]
})
export class SharedModule { }
