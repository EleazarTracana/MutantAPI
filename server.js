const config      = require("./config"),
      bodyParser  = require("body-parser"),
      MongoClient = require('mongodb').MongoClient;
      express     = require('express');
        
      MongoClient.connect(config.conn, (error,client) => {
          if(!error){
            var app = express(),
                db  = client.db(config.databaseName);

            app.use(bodyParser.urlencoded({extended: true}));
            app.use(bodyParser.json());
            app.listen(config.port);

            require('./routes/xmen')(app,db);
            console.log("MutantAPI Is currently running on port: "+ config.port);
          }else{
              console.log(error)
              //not implemented connection error handler 
          }
      });