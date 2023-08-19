import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatsComponent } from './chats.component';
import { RoomComponent } from './room/room.component';
import { IndexComponent } from './index/index.component';
const routes: Routes = [
    {
        path: '',
        component: ChatsComponent,
        children: [
            { path: '', component: IndexComponent },
            {
                path: ':id/room', component: RoomComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChatsRoutingModule { }