const router = require('express').Router();
//let User = require('../models/user.model');
let Driver = require('../models/driver.model');
let User = require('../models/user.model');
var path = require('path');
var mime = require('mime');
//let Rader =require('../models/rader.model');
var fs = require('fs');
var bodyParser = require('body-parser');
const fetch = require('node-fetch');
var malek;
var data_globale;
var download = require('download-file')
/////////////////////////////////////upload file 
var express = require('express');

const { createWriteStream } = require("fs");


const { Storage } = require("@google-cloud/storage");
////////////////////////////////////////////////
router.route('/createfile').post((req, res) => {
  const path_name = req.body.path;
  console.log(path_name)

  // stringify JSON Object
  //var jsonContent = JSON.stringify(file_write);

  ////console.log("this is username ",jsonContent.username);
  //console.log("this is id ",jsonContent._id);



  //fs.appendFile('yacin2.json',"jsonContent" , function (err) {
  // if (err) throw err;
  // console.log('Saved!');
  // });
  var file = __dirname + '/yacin2.json';

  var filename = path.basename(file);
  var mimetype = mime.lookup(file);

  res.setHeader('Content-disposition', 'attachment; filename=' + filename);
  res.setHeader('Content-type', mimetype);

  var filestream = fs.createReadStream(file);
  filestream.pipe(res);



  async function downloadImage() {
    const url = 'http://unsplash.com/photos/AaEQmoufHLk/download?force=true'
    const path = Path.resolve(__dirname, 'images', 'code.jpg')
    const writer = Fs.createWriteStream(path)

    const response = await Axios({
      url,
      method: 'GET',
      responseType: 'stream'
    })

    response.data.pipe(writer)

    return new Promise((resolve, reject) => {
      writer.on('finish', resolve)
      writer.on('error', reject)
    })
  }
  // res.json({'resdata':'ffds'})
  // .then(() => res.json("drivers added"))
  //.catch(err => res.status(400).json('malek: ' + err));
  console.log("this is req.body 59852");

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

/////////////// add rader

//////////
router.route('/add').post((req, recds) => {

  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const age = req.body.age;
  const sex = req.body.sex;
  const type_cars = req.body.type_cars;
  const state = req.body.state1;
  const type_person = req.body.type_person;
  const date_birth = req.body.date_birth;
  const id_player = req.body.id_player;
  const year_car = req.body.year_car;
  console.log(first_name)
  console.log(age)

  console.log(type_person)

  console.log(date_birth)

  console.log(year_car)

  const newDriver = new Driver({
    first_name,
    last_name,
    age,
    sex,
    type_cars,
    state,
    type_person,
    date_birth,
    id_player,
    year_car
  });
  console.log("////////////////////////////////////////////////")
  console.log(newDriver.first_name)
  console.log(newDriver.age)

  console.log(newDriver.type_person)

  console.log(newDriver.date_birth)

  console.log(newDriver.year_car)

  newDriver.save()
    .then(() => res.json("drivers added"))
    .catch(err => res.status(400).json('malek: ' + err));
  console.log("this is req.body 1111", req.body);
});





//var maliko = User.find( { username: "malek60" });
//console.log( User.find({ username: 'malek60'}));
// console.log(maliko);








module.exports = router;
