import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { SiderBarModule } from '../components/sider-bar/sider-bar.module';

@NgModule({
  imports: [
    SharedModule,
    PagesRoutingModule,
    SiderBarModule
  ],
  declarations: [PagesComponent]
})
export class PagesModule { }
