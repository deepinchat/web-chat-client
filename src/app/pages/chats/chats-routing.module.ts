import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatsComponent } from './chats.component';
import { SettingsComponent } from './settings/settings.component';
import { MembersComponent } from './members/members.component';
import { RoomComponent } from './room/room.component';
import { IndexComponent } from './index/index.component';
import { MessagesComponent } from './messages/messages.component';
const routes: Routes = [
    {
        path: '',
        component: ChatsComponent,
        children: [
            { path: '', component: IndexComponent },
            {
                path: ':id/room', component: RoomComponent,
                children: [
                    { path: '', component: MessagesComponent },
                    { path: 'settings', component: SettingsComponent },
                    { path: 'members', component: MembersComponent }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChatsRoutingModule { }