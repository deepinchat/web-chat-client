import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SiderBarComponent } from './sider-bar.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    MatListModule,
    MatIconModule,
    SharedModule,
  ],
  declarations: [SiderBarComponent],
  exports: [
    SiderBarComponent
  ]
})
export class SiderBarModule { }
