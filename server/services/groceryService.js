const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017/groceryDb';

class GroceryService{
	
	constructor(req, res){
		this.req = req
		this.res = res
	}

	insert(groceryItem, db, callback){
		db.collection('grocery').insertOne({
		  		"item" : groceryItem
		}, function(){
			callback()		
		})
	}

	addGrocery(){
		let self = this;
		let groceryItem = this.req.body.groceryItem;
		try{
			MongoClient.connect(url, function(err, db) {
				assert.equal(null, err);
			  	self.insert(groceryItem, db, function(){
			  		db.close()
			  		return self.res.status(200).json({
						status: 'success'
					})
			  	})
			});
		}
		catch(error){
			return self.res.status(500).json({
				status: 'error',
				error: error
			})
		}
	}
	getGrocery(){
		let self = this;
		try{
			MongoClient.connect(url, function(err, db) {
				assert.equal(null, err);
			  	let groceryList = []
			  	let cursor = db.collection('grocery').find();

			   	cursor.each(function(err, doc) {
			      assert.equal(err, null);
			      if (doc != null) {
			        groceryList.push(doc)
			      } else {
			        return self.res.status(200).json({
						status: 'success',
						data: groceryList
					})
			      }
			   	});
			});
		}
		catch(error){
			return self.res.status(500).json({
				status: 'error',
				error: error
			})
		}
	}
}
module.exports = GroceryService