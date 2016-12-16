import {Component, ViewEncapsulation} from '@angular/core';
// import {Pipe, PipeTransform} from 'angular2/core';

// import { SmartTablesService } from './smartTables.service';
import { RestService } from  './rest.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { LocalDataSource } from 'ng2-smart-table';
// import { ServerDataSource } from 'ng2-smart-table/build/src/ng2-smart-table/lib/data-source/server/server.data-source';
import { HttpModule,Http } from '@angular/http';

// @Pipe({
//   name: 'myFilter'
// })
// export class MyFilter implements PipeTransform {
//   transform(customerData: Array<Object>, args: any[]) {
//     console.log(args);
//     var counter = args[0][1];
//     if (customerData == undefined) {
//       if (counter) {
//         counter.count = 0;
//       }
//       return;
//     }
//     var re = new RegExp(args[0][0]);
//     var result = customerData.filter((item) => re.test(item.customerId));
//     if (counter) {
//       counter.count = result.length;
//       console.log(result.length);
//     }
//     return result;
//   }
// }

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
 // filteredCount = {count: 0};
 //  customerData = [
 //    {'customerId': 'xxxxxx'},
 //    {'customerId': 'aaaaa'},
 //    {'customerId': 'bbbbb'},
 //    {'customerId': 'gggggg'},
 //  ];
 //  searchTerm = '.*[ab].*';
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

     // filteredCount = this.items.length;

  constructor(protected service: RestService) {
    this.source = new LocalDataSource();
    /*this.service.getData().then((data) => {
      this.source.load(data);
    })*/
    this.service.checkCredentials1().subscribe(data => {
      this.items = data.elasticSearchValues;
      console.log(this.items)
       // console.log(this.items.length);
    }, error => console.log('Could not load List of Service'));

    this.getData().then((data) => {
      this.source.load(data);
      console.log('count ' + this.source.count());
      this.filteredcount = this.source.count();
      // this.source.load(this.getRowCount(data))
      // this.source.count(this.items.getRowCount());
     
      // this.source.load(data.length);
      // this.source.load(data.getRowCount(this.items));
       // console.log(this.source.count(this.filteredCount));

    });
    //this.source.load(this.items);
   
    // console.log(this.source.count());
    // console.log(this.source.getFiletedCollection());
  }
  // onDeleteConfirm(event): void {
  //   if (window.confirm('Are you sure you want to delete?')) {
  //     event.confirm.resolve();
  //   } else {
  //     event.confirm.reject();
  //   }
  // }



  // source: ServerDataSource;



  // constructor(protected service: RestService, http: Http) {
    //      this.service.getData().then((data) => {
      //         this.source.load(data)
      //         console.log(data);

      //       });

      //      this.source = new ServerDataSource(http, {endPoint: 'http://172.16.103.25:8080/ElasticSearchClient/elk/searchAll'});
      //     // }

      //   }  


      //  constructor(private service: RestService, private http: Http){
        //     this.http = http;
        //      this.service.getData().then((data) => {
          //         this.source.load(data)
          //         console.log(data);
          
          //       });
          //      this.source = new ServerDataSource(http, {endPoint: 'http://172.16.103.25:8080/ElasticSearchClient/elk/searchAll'});
          // }


          getData(): Promise<any> {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve(this.items);
              }, 2000);
            });
          }
        }
