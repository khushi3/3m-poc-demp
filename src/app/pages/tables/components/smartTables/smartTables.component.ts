import {Component, ViewEncapsulation,ViewChild} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RestService } from  './rest.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { LocalDataSource } from 'ng2-smart-table';
// import { ServerDataSource } from 'ng2-smart-table/build/src/ng2-smart-table/lib/data-source/server/server.data-source';
import { HttpModule,Http } from '@angular/http';
import {NgForm} from '@angular/forms';
import myGlobals = require('../../../../global.config');
import {PagerComponent} from 'ng2-smart-table/pager';

@Component({
  selector: 'basic-tables',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./smartTables.scss')],
  template: require('./smartTables.html')
})

export class SmartTables {

  //public pagenum: number = 10;
  //public num : 10;
  rowPerPage = myGlobals.row_per_page;
  query: string = '';
  public filteredcount;
  public input: string = '<input _ngcontent-bbl-39="" type="checkbox" value="Check 1">';

  settings = {
    hideHeader: false,
    doEmit: true,
    silent: true,
    actions: {
      columnTitle: 'Actions',
      type: 'html',
      add: false,
      edit: false,

    },
    pager: {
      perPage: 15,
    },
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a" style="text-align: left;"></i>',
      confirmDelete: true
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
      }
      // request: {
      //   title: myGlobals.label_Request,
      //   type: 'string'
      // }
    }
  };

  source: LocalDataSource;
  public items = [];

  constructor(protected service: RestService,private _sanitizer: DomSanitizer) {
    this.source = new LocalDataSource();

    this.service.searchAllDataFromServer().subscribe(data => {
      this.items = data.elasticSearchValues;
      console.log(this.items)
    }, error => console.log('Could not load List of Service'));

    this.getData().then((data) => {
      this.source.load(data); 
      this.filteredcount = this.source.count();
    });
  }

  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.items);
      }, 2000);
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  // onChangePage(event): void{
  //   this.source.setPaging(1,event.page, true);
  //   this.source.refresh();
  // }
}
