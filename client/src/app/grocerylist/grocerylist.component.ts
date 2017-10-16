import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common/common.service'
import { Grocery } from '../groceryadd/grocery.model'

@Component({
  selector: 'grocery-list',
  templateUrl: './grocerylist.component.html',
  styleUrls: ['./grocerylist.component.css']
})
export class GroceryListComponent implements OnInit {

	private groceryList:Grocery[]

	constructor(private commonService:CommonService){

	}

	ngOnInit(){

		this.getAllGrocery()

		this.commonService.add_subject.subscribe(response => {
			this.getAllGrocery()
		})

	}

	getAllGrocery(){
		this.commonService.getGrocery().subscribe(res =>{
			this.groceryList  = []
			res.json().data.map(e => {
				this.groceryList.push(new Grocery(e.item,false));
			})
		})
	}

}
