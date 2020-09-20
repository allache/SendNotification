/**
 * Triggered from a change to a Cloud Storage bucket.
 *
 * @param {!Object} event Event payload.
 * @param {!Object} context Metadata for the event.
 */

'use strict';
var fs = require('fs');

    const Storage = require('@google-cloud/storage');
    const storage = Storage();
exports.helloGCS = (event, context) => {
  var buf2;
  var data1;
  const gcsEvent = event;
  console.log(`Processing file: ${gcsEvent.name}`); 
  // Imports the Google Cloud client library
 const PubSub = require('@google-cloud/pubsub');
// Creates a client
const pubsub = new PubSub();
  
const topicName = 'to2';
//const data1 = JSON.stringify(buf);
const data2 = JSON.stringify({ foo: 'bar2_18' });
const data3 = JSON.stringify({ foo: 'bar3' });
//const data1 = JSON.stringify({ foo: 'bar1' });
//const databuff = JSON.stringify(buf); 
 // const databuff2 = JSON.stringify(buf2); 

const publisher = pubsub.topic(topicName).publisher({
    batching: {
      maxMessages: 100,
      maxMilliseconds: 1000,
    },
  })
//const publisher = pubsub.topic(topicName);
//publisher.publish(Buffer.from(data1));
function handleResult(p) {
  p.then(results => {

    console.log(`Message ${results} published.`);
  })
  .catch(err => {
    console.error('ERROR:', err);
  });
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
      console.log('Reading File');
            var archivo = storage.bucket('generate_file').file('data.json').createReadStream();
 ////var archivo2 = storage.bucket('generate_file').file('data.json');
            console.log('Concat Data');
 // console.log("buf n archvo",archivo);
  var obj;
     
            var  buf = '';
      archivo.on('data', function(d) {
              buf+=d;
      
            }).on('end', function() {
                var data12 = JSON.parse(buf);
                //console.log("buf n3_json stringify",data12);
               // console.log("buf n2 buf+=d",buf);
             console.log("buf n3_buf",buf);
        const data = JSON.stringify(buf);  
        
   //  for (i = 0; i <10; i++) { 
      handleResult(publisher.publish(Buffer.from(buf)));
        //      handleResult(publisher.publish(Buffer.from(data12)));
          //   handleResult(publisher.publish(Buffer.from(buf)));

        handleResult(publisher.publish(Buffer.from(buf)));
              console.log("End");
              res.send(buf);
          

         
            }); 
  //  handleResult(publisher.publish(Buffer.from(buf)));
          //   handleResult(publisher.publish(Buffer.from(buf)));
         

           //  handleResult(publisher.publish(Buffer.from(buf)));
         
   
  
                                                 // var data10 = JSON.stringify(buf);
  //fs.readFile(buf,'utf8', function (err, data) {
 // if (err) throw err;
 // obj = JSON.stringify(data);
//handleResult(publisher.publish(Buffer.from(obj)));
 // console.log("dobject to json",obj.users.length);
    
//});
  
 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

  
// Publish three messages
//handleResult(publisher.publish(Buffer.from(data12)));
///handleResult(publisher.publish(Buffer.from(data12)));
 //handleResult(publisher.publish(Buffer.from(buf2)));
 //handleResult(publisher.publish(Buffer.from(databuff)));
  // handleResult(publisher.publish(Buffer.from(databuff2)));
//handleResult(publisher.publish(Buffer.from(data3)));
//  handleResult(publisher.publish(Buffer.from(data10)));
};


