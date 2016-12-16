import { Component, ViewEncapsulation, OnInit} from '@angular/core';
import { RestService } from  './rest.service';
//import './ckeditor.loader.ts';


@Component({
	selector: 'ckeditor-component', 
	encapsulation: ViewEncapsulation.None,
	template: require('./ckeditor.html'),
	styles: [require('./ckeditor.scss')]
})

export class Ckeditor{

	public items = [];
	public items1 = [];
	public getData:any;
	
	constructor(private restService: RestService) {
		this.restService.checkCredentials().subscribe(data => {
			this.items = data;
			console.log(data)
		}, error => console.log('Could not load List of Service'));

		this.restService.checkCredentials1().subscribe(data => {
			this.items1 = data.elasticSearchValues;
			console.log(data.elasticSearchValues)
		}, error => console.log('Could not load List of Service'));

	} 

	selectFun() {
		for (var x = 0; x<this.items.length; x++) {
			this.items[this.items[x]] = true;
		}
	}

}
