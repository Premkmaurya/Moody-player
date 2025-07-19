const mongoose = require("mongoose");


function mongoDb(){
	mongoose.connect(process.env.MONGODB_URL)
	.then(()=>{
		console.log("server is connected to mongoDb.")
	})
	.catch((err)=>{
		console.log("error",err)
	})
}

module.exports = mongoDb;