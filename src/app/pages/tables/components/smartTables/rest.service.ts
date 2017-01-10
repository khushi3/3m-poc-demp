import { Injectable } from '@angular/core';
import { HttpModule,Http} from '@angular/http';
//import myGlobals = require('./globals');

import myGlobals = require('../../../../global.config');


@Injectable()
export class RestService {
	 private actionUrl: string;

  constructor(private http: Http) {
 
        this.actionUrl = myGlobals.ServerWithApiUrl;
        this.http = http;
 
       
    }

	searchDataFromServer() {
		return this.http.get(this.actionUrl)
		.map(response => response.json());

	}

	searchAllDataFromServer() {
		return this.http.get(this.actionUrl)
		.map(response => response.json());
	}
}