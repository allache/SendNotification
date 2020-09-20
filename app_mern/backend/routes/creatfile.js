const router = require('express').Router();
let User = require('../models/user.model');
const path = require("path");
const multer = require("multer");
var fs = require('fs');
var bodyParser = require('body-parser');
const fetch = require('node-fetch');
var malek;




const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,'./public/uploads/')
    cb(null, file.filename + '-' + Date.now());
  },
  
    
    // cb(null,"IMAGE-" + Date.now() + path.extname(file.originalname));
    

});


const upload = multer({
  storage: storage,
  limits:{fileSize: 1000000},
}).single("file");

    router.route('/upload').post((req, res) => {
      upload(req, res, (err) => {
    console.log("Request ---", req.body);
    console.log("Request file ---", req.files);//Here you get file.
    /*Now do where ever you want to do*/
    if(!err)
       return res.sendStatus(200).end();
 });

 });

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const categories = req.body.categories;
  const state = req.body.state;
  const city = req.body.city;
  const birth = req.body.birth;
  malek=birth;
  console.log(req.body) 

  //console.log(req.data)

  
  //var ch =(req.body)  ///work fine
  // var gh=User.find() // console.log(gh) // work fine
  //console.log(ch)   // work fine
  const newUser = new User({username,
                          description,
                          categories,
                          state,
                          city,
                          birth});
                       
 //var maliko = User.find( { username: "malek60" });
  //console.log( User.find({ username: 'malek60'}));
 // console.log(maliko);
  newUser.save()
  var malek80={ $exists: true, $ne: null };
  ///User.find({},{username:malek80,_id:0})
  //User.findOne({ "username": "malek60" },{ _id: 0})

  User.find({ city:{ $exists: true, $ne: null }},{ username:0,
                                                   birth:0,
                                                description:0,
                                                categories:0,
                                                state:0,
                                                 createdAt:0,
                                                updatedAt:0,
                                                 __v:0   
     })


    .then((ff) => res.json(ff))
    
    .catch(err => res.status(400).json('Error: ' + err));
    console.log("this is req.body",req.body);
    //let data = res.data;
    //console.log(data);
   
});


router.route('/create_file').post((req, res) => {
  const username = req.body.username;
  var malek50;
  User.find({},{username:1,_id:1})
 // .then(JSON.stringify(res.body))
 
 ///



 ////
 .then((malek40) => res.json(malek40))

 //
 //.then(malek40 => {
 // console.log(res.json(malek40)) //UnhandledPromiseRejectionWarning: TypeError: Converting circular structure to JSON
//})


///////////////////////////////
//var args = ({},{username:1,_id:0});
//console.log("database: query.find(%s)", JSON.stringify(args));

//User.find(args).toArray(function(err, results){
 // if(err) {
 //     console.error(JSON.stringify(err));
 // } 
 // console.log("results:", JSON.stringify(results));
//});
///////////////////////////
//
  //console.log(JSON.stringify(res.body))
 // console.log(res.data);
  malek50 =(User.find({},{username:1,_id:0})).toArray

 console.log("this is malek50",malek50)
 console.log("this is req.body",req.body); // not a string, but your parsed JSON data
 console.log(req.body.a);
 console.log("this is res.body",res.body); // not a string, but your parsed JSON data
 //console.log(Response);
 //console.log(Response.data);
 //console.log(res.json);
 //console.log(response.data);
 //console.log(res.body.a);
//console.log(users1);
console.log("this is malek50",malek50);

var file_write=req.body;
console.log(file_write.username);
//console.log(file_write._id.username);
//console.log(file_write._id[1]);

// stringify JSON Object
var jsonContent = JSON.stringify(file_write);

console.log("this is username ",jsonContent.username);
console.log("this is id ",jsonContent._id);



fs.appendFile('yacin.json',jsonContent , function (err) {
  if (err) throw err;
  console.log('Saved!');
});
});


module.exports = router;
