var db = require('mysql');
connection = db.createConnection({

  host: "localhost",
  port : 7778,
  user: "root",
  password: "root",
  database: "build_cupcate_project",
  multipleStatements: true
  
});