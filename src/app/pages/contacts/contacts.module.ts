import { NgModule } from '@angular/core';
import { ContactsComponent } from './contacts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactsRoutingModule } from './contacts-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ContactsRoutingModule
  ],
  declarations: [ContactsComponent]
})
export class ContactsModule { }
