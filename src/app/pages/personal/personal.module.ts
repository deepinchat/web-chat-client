import { NgModule } from '@angular/core';
import { PersonalComponent } from './personal.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PersonalRoutingModule } from './personal-routing.module';

@NgModule({
  imports: [
    SharedModule,
    PersonalRoutingModule
  ],
  declarations: [PersonalComponent]
})
export class PersonalModule { }
