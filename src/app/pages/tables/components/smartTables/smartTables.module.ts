import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { HttpModule } from '@angular/http';

import { routing }       from './tables.routing';
import { Tables } from './tables.component';
import { SmartTables } from './components/smartTables/smartTables.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ResponsiveTable } from './components/basicTables/components/responsiveTable';
import { StripedTable } from './components/basicTables/components/stripedTable';
import { BorderedTable } from './components/basicTables/components/borderedTable';
import { HoverTable } from './components/basicTables/components/hoverTable';
import { CondensedTable } from './components/basicTables/components/condensedTable';
import { ContextualTable } from './components/basicTables/components/contextualTable';
import { RestService } from  './smartTables/rest.service';



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
    SmartTables,
    HoverTable,
    BorderedTable,
    CondensedTable,
    StripedTable,
    ContextualTable,
    ResponsiveTable
  ],
  providers: [
    RestService
    
  ]
})
export default class TablesModule {}
