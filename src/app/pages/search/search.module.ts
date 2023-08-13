import { NgModule } from '@angular/core'; 
import { MatTabsModule } from '@angular/material/tabs';
import { SearchComponent } from './search.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchRoutingModule } from './search-routing.module';

@NgModule({
  imports: [
    SharedModule,
    SearchRoutingModule,
    MatTabsModule
  ],
  declarations: [SearchComponent]
})
export class SearchModule { }
