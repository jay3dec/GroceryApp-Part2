import { Component, OnInit } from '@angular/core';
import { Grocery } from './grocery.model'
import { CommonService } from '../common/common.service'

@Component({
	selector: 'grocery-add',
	templateUrl: './groceryadd.component.html',
	styleUrls: ['./groceryadd.component.css']

})
export class GroceryAddComponent implements OnInit {

	private groceryItem


	constructor(private commonService:CommonService) {

	}

	addGrocery(){
		this.commonService.addGrocery(this.groceryItem).subscribe(res => {
			this.commonService.add_subject.next()
		})

		this.groceryItem = ''
	}

	ngOnInit() {

	}
}
