import { Injectable } from '@angular/core';
import { Grocery } from '../groceryadd/grocery.model';
import { Subject } from 'rxjs/Subject';
import { Http } from '@angular/http';
import {Observable} from 'rxjs';

@Injectable()
export class CommonService {
	public groceryList: Grocery[]
	public add_subject=new Subject<String>()

	constructor(private http : Http){
		this.groceryList = []
	}

	addGrocery(item){
		return this.http.post('/api/addGrocery',{
			groceryItem : item
		})
	}

	getGrocery(){
		return this.http.post('/api/getGrocery',{})
	}
}