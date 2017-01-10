import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { HttpModule } from '@angular/http';

import { routing }       from './tables.routing';
import { Tables } from './tables.component';
import { SmartTables } from './components/smartTables/smartTables.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { RestService } from  './components/smartTables/rest.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    HttpModule,
    Ng2SmartTableModule,
    routing
  ],
  declarations: [
    Tables,
    SmartTables
    
  ],
  providers: [
    RestService
  ]
})
export default class TablesModule {}
