const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://rahul9115:nanaamma@cluster0-d6yk7.mongodb.net/test?retryWrites=true&w=majority";
module.exports =(myobj)=>{ 
  MongoClient.connect(uri, (err, db)=> {
  if (err) throw err;
  var dbo = db.db("mongo");
  var collection=dbo.collection("customers");
  collection.find((myobj,{$exists: true}), function(err, doc) //find if a value exists
                {     
                    if(doc) //if it does
                    {
                        console.log("Already present"); // print out what it sends back
                    }
                    else if(!doc) // if it does not 
                    {
                        dbo.collection("customers").insertOne(myobj, function(err, res) {
                        if (err) throw err;
                        console.log("1 document inserted");
                        db.close();
                      });
                
                    }
                });
  });
}