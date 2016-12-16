import { Injectable } from '@angular/core';
import { HttpModule,Http} from '@angular/http';

@Injectable()
export class RestService {
	 constructor(private http: Http){
      this.http = http;
  }


	checkCredentials() {
		return this.http.get('http://172.16.103.25:8080/ElasticSearchClient/elk/clusterHealth')
		.map(response => response.json());

	}

	checkCredentials1() {
		return this.http.get('http://172.16.103.25:8080/ElasticSearchClient/elk/searchAll')
		.map(response => response.json());
	}

	getData(): Promise<any> {
   	 return new Promise((resolve, reject) => {
    	  setTimeout(() => {
   	     resolve(this.http.get('http://172.16.103.25:8080/ElasticSearchClient/elk/searchAll'));
   	   }, 2000);
  	  });
 	}
}

	
