require("dotenv").config() 
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

console.log(process.env.EMAIL)
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });


  
app.use(express.static('public'));

var io = require('socket.io')(server);
io.sockets.on('connection',
  function (socket) {
    //console.log("We have a new client: " + socket.id);
    socket.on('email',
      function(data) {
       var data=JSON.parse(data)
       var email=data.email;
       var name=data.name
       var content=JSON.stringify(data.data).split(",")[1]
       var mailOptions = {
        from: 'greenlab.attestation.ziko.js@gmail.com',
        to: email,
        subject: 'Greenlab Certificat',
        text: 'Hi ',
        attachments: [{
          filename: name+".pdf",
          contentType: 'application/pdf',
          content:content,
          encoding: 'base64',
       }]
      };
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
              socket.emit("succed","hhh")
            }
          });
      }
    );
  })


server.listen(3000, () => {
  console.log('listening on *:3000');
});
