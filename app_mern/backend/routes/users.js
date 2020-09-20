const router = require('express').Router();
let User = require('../models/user.model');
const fetch = require('node-fetch');
//let User = require('../models/user.model');
var path = require('path');
var mime = require('mime');
//let Rader =require('../models/rader.model');
var fs = require('fs');
const { Storage } = require("@google-cloud/storage");
var bodyParser = require('body-parser');
var malek;
var data_globale;
var malek;
var malekf;
var datefile;



router.route('/').get((req, res) => {
  User.find()



    .then(users1 => res.json(users1))
    .catch(err => res.status(400).json('Error: ' + err));
  console.log(malek)
  console.log("this is res.data", res.data)


});


router.route('/search').post((req, res) => {

  console.log(req.body.data)
  var username2 = req.body.username;
  var gender2 = req.body.gender;
  var birth2 = req.body.birth;
  var category3 = req.body.option2;
  var state2 = req.body.state;

  var id_player2 = req.body.id_player;
  var lastname2 = req.body.lastname;

  var firstname2 = req.body.firstname;
  var phone2 = req.body.phone;
  var email2 = req.body.email;
  var message = req.body.message;

  console.log(gender2)
  data_globale = message;
  console.log(message)

  console.log("csdcdscsd", req.body.message)



  console.log(id_player2)

  //console.log(year_car)

  const exist = { $exists: true };
  //if (age=="") age=exist
  //if (sex=="") sex=exist
  //if (type_cars=="") Stype_cars=exist
  // if (state=="") state=exist
  //if (type_cars=="") type_cars=exist
  //if (type_person=="") type_person=exist
  // if (date_birth=="") date_birth=exist
  // if (id_player=="") id_player=exist
  //if (year_car=="") year_car=exist

  var malek80 = { $exists: true };
  ///User.find({},{username:malek80,_id:0})
  //User.findOne({ "username": "malek60" },{ _id: 0})
  var ss = req.body;
  var file_write = req.body;
  //var jsonContent = JSON.stringify(Ssex);
  //if (sex=="") {sex=}
  ///Both Driver/Rader Both Male/Female
  if (username2 == "") { username2 = exist };
  if (category3 == "") { category3 = exist };
  if (state2 == "") { state2 = exist };
  if (birth2 == "") { birth2 = exist };
  if (firstname2 == "") { firstname2 = exist };
  if (lastname2 == "") { lastname2 = exist };
  if (email2 == "") { email2 = exist };
  if (gender2 == "") { gender2 = exist };
  if (phone2 == "") { phone2 = exist };
  if (id_player2 == "") { id_player2 = exist };

  console.log(username2)

  console.log("this is req.body 222 ", req.body);

  User.find({
    username: username2,
    category: category3,
    birth: birth2,
    firstname: firstname2,
    lastname: lastname2,
    state: state2,
    email: email2,
    gender: gender2,
    phone: phone2,
    id_player: id_player2

  }, 'username id_player ')

    .then((data) => {
      console.log(data.message)
      console.log(message)

      var arr = []
      for (var i = 0; i < data.length; i++) {
        arr.push(data[i].id_player)
      }

      console.log("array", arr);
      console.log("log data", data);


      res.json(data)
      //   res.json(arr.langht)

      console.log("vsdvsdvsd")
      datefile = { "payload": { "message": data_globale }, "users": arr }
      console.log(datefile)


    })

    .catch(err => res.status(400).json('Error: ' + err));
  //console.log("this is req.body lol ",req.body); 

})


router.route('/add').post((req, res) => {
  const username = req.body.username;
  const category = req.body.category;
  const state = req.body.state;
  const birth = req.body.birth;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const gender = req.body.gender;
  const phone = req.body.phone;
  const id_player = req.body.id_player;

  malek = birth;
  console.log(req.body)


  const newUser = new User({
    username,
    category,
    state,
    birth,
    firstname,
    lastname,
    email,
    gender,
    phone,
    id_player,
  });

  newUser.save()


    .then(function() { res.json(ff)})

    .catch(err => res.status(400).json('Error: ' + err));
   console.log("this is req.body", req.body);

});



router.route('/send_segment').post((req, res) => {
  console.log(req.body.segment);
  var namesegment = req.body.segment
  data_globale = req.body.message;
  console.log(req.body.message)
  var sendNotification = function (data) {
    var headers = {
      "Content-Type": "application/json; charset=utf-8",
      "Authorization": "Basic NGE1OTEyYjUtMDcyYS00Zjk3LWI3MjItZDUzYzIxNzM0YzBh"
    };

    var options = {
      host: "onesignal.com",
      port: 443,
      path: "/api/v1/notifications",
      method: "POST",
      headers: headers
    };

    var https = require('https');
    var req = https.request(options, function (res) {
      res.on('data', function (data) {
        console.log("Response:");
        console.log(JSON.parse(data));
        console.log("true")
        res.json({ 'true': "true" })
      });
    });

    req.on('error', function (e) {
      console.log("ERROR:");
      console.log(e);
      console.log("false")
      res.json({ 'false': "false" })
    });

    req.write(JSON.stringify(data));
    req.end();
  };

  var message = {
    app_id: "ef3e69e5-ca32-4f29-88c7-a53c35259d58",
    url: 'http://www.google.com',
    contents: { "en": "data_globale" },
    // included_segments: [namesegment] 
    include_player_ids: ['d99716fb-1abe-43a6-9c06-a5afc29c0df9']
  };

  sendNotification(message);


});



router.route('/upload_file').get((req, res) => {
  console.log("makldjlkj")
  // stringify JSON Object


  const gcs = new Storage({
    keyFilename: path.join(__dirname, "/YAssir-stage-push-notification-92c4e5ae347d.json"),
    projectId: "yassir-push-notification"
  });
  const bucketName = ("generate_file");
  const filename1 = ('data.json');

  gcs.getBuckets().then(x => console.log(x));
  const coolFilesBucket = gcs.bucket("generate_file");


  // [START storage_upload_file]
  // Imports the Google Cloud client library
  // const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';
  // const filename = 'Local file to upload, e.g. ./local/path/to/file.txt';

  // Uploads a local file to the bucket
  gcs.bucket(bucketName).upload(filename1, {
    // Support for HTTP requests made with `Accept-Encoding: gzip`
    gzip: true,
    // By setting the option `destination`, you can change the name of the
    // object you are uploading to a bucket.
    metadata: {
      // Enable long-lived HTTP caching headers
      // Use only if the contents of the file will never change
      // (If the contents will change, use cacheControl: 'no-cache')
      cacheControl: 'public, max-age=31536000',
    },
  });

  //  console.log(`${filename} uploaded to ${bucketName}.`);
  // [END storage_upload_file]


  res.json({ 'gggg': 'sgdsvg' })


});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////// add rader

router.route('/create_file').post((req, res) => {
  const username = req.body.username;
  var malek50;
  User.find({}, { username: 1, _id: 1 })
    .then((malek40) => res.json(malek40))
  malek50 = (User.find({}, { username: 1, _id: 0 })).toArray

  console.log("this is malek50", malek50)
  console.log("this is req.body lol lol lol ", req.body); // not a string, but your parsed JSON data
  console.log(req.body.a);
  console.log("this is res.body", res.body); // not a string, but your parsed JSON data

  console.log("this is malek50", malek50);

  var file_write = req.body;
  console.log(file_write.username);

  var jsonContent = JSON.stringify(datefile);

  console.log("this is username ", jsonContent);
  console.log("this is id ", jsonContent);



  fs.appendFile('data.json', jsonContent, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
});


module.exports = router;
