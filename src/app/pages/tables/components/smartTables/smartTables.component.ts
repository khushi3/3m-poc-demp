import {Component, ViewEncapsulation,ViewChild} from '@angular/core';

import { RestService } from  './rest.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { LocalDataSource } from 'ng2-smart-table';
// import { ServerDataSource } from 'ng2-smart-table/build/src/ng2-smart-table/lib/data-source/server/server.data-source';
import { HttpModule,Http } from '@angular/http';
import myGlobals = require('./globals');
@Component({
  selector: 'basic-tables',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./smartTables.scss')],
  template: require('./smartTables.html')
})
export class SmartTables {

  query: string = '';
  public filteredcount;
  settings = {
    hideHeader: true,
    actions: {
      columnTitle: 'Actions',
      add: false,
      edit: false,
      delete: false
    },
    pager: {
      perPage: 9
    },

    columns: {
      host: {
        title: myGlobals.label_server,
        type: 'string'
      },
      client: {
        title: myGlobals.label_Client,
        type: 'string'
      },
      method: {
        title: myGlobals.label_Method,
        type: 'string'
      },

      status: {
        title: myGlobals.label_Status,
        type: 'number'
      },
      request: {
        title: myGlobals.label_Request,
        type: 'string'
      }
    }
  };

  source: LocalDataSource;
  public items = [];

  constructor(protected service: RestService) {
    this.source = new LocalDataSource();

    this.service.searchAllDataFromServer().subscribe(data => {
      this.items = data.elasticSearchValues;
      console.log(this.items)
    }, error => console.log('Could not load List of Service'));

    this.getData().then((data) => {
      this.source.load(data); 
      // this.filteredcount = this.source.count();
    });
  }

  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.items);
      }, 2000);
    });
  }
}
