'use strict';

export var label_server: string="SERVER"; 
export var label_Client: string="CLIENT"; 
export var label_Method: string="METHOD"; 
export var label_Status: any="STATUS";
// export var label_Request: string="Request";
export var  Server: string = "http://localhost:8080/";
export var  ApiUrl: string = "ElasticSearchClient/elk/search/enc360";
export var  ApiUrlStatus: string = "ElasticSearchClient/elk/statusChart";
export var  ServerWithApiUrl = this.Server + this.ApiUrl;
export var  ServerWithApiUrlStatus = this.Server + this.ApiUrlStatus;
export var row_per_page: any[] = [{page: 10}, {page: 25}, {page: 50}, {page: 100}, {page: 200}, {page: 300}];