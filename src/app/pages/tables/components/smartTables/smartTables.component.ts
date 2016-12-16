import {Component, ViewEncapsulation,ViewChild} from '@angular/core';

import { RestService } from  './rest.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { LocalDataSource } from 'ng2-smart-table';
// import { ServerDataSource } from 'ng2-smart-table/build/src/ng2-smart-table/lib/data-source/server/server.data-source';
import { HttpModule,Http } from '@angular/http';

@Component({
  selector: 'basic-tables',
  // pipes: [MyFilter],
  encapsulation: ViewEncapsulation.None,
  styles: [require('./smartTables.scss')],
  template: require('./smartTables.html')
})
export class SmartTables {

  query: string = '';
public filteredcount;
 
  settings = {
    // add: {
    //   addButtonContent: '<i class="ion-ios-plus-outline"></i>',
    //   createButtonContent: '<i class="ion-checkmark"></i>',
    //   cancelButtonContent: '<i class="ion-close"></i>',
    // },
    // edit: {
    //   editButtonContent: '<i class="ion-edit"></i>',
    //   saveButtonContent: '<i class="ion-checkmark"></i>',
    //   cancelButtonContent: '<i class="ion-close"></i>',
    // },
    // delete: {
    //   deleteButtonContent: '<i class="ion-trash-a"></i>',
    //   confirmDelete: true
    // },
    columns: {
      host: {
        title: 'Host Name',
        type: 'string'
      },
      client: {
        title: 'Client',
        type: 'string'
      },
      method: {
        title: 'Method',
        type: 'string'
      },

      status: {
        title: 'Status',
        type: 'number'
      },
      request: {
        title: 'Request',
        type: 'string'
      }
    }
  };

  source: LocalDataSource;
  public items = [];

   

  constructor(protected service: RestService) {
    this.source = new LocalDataSource();
  
    this.service.checkCredentials1().subscribe(data => {
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
