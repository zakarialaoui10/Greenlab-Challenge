require("dotenv").config()  
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });
var email;
app.use(express.static('public'));
var io = require('socket.io')(server);
io.sockets.on('connection',
  function (socket) {
    console.log("We have a new client: " + socket.id);
    socket.on('email',
      function(data) {
       var data=JSON.parse(data)
       email=data.email;
       var name=data.name
       var content=JSON.stringify(data.data).split(",")[1]
       var mailOptions = {
        from: 'greenlab.attestation.ziko.js@gmail.com',
        to: email,
        subject: 'Greenlab Certificate',
        html: '<h2>Hello<h2><p>Congratulations </br>You have successfully completed the course </br></p>',
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
              console.log('Email sent to : ' + email);
              socket.emit("succed",'Email sent to : ' + email +" on "+new Date().toDateString()+" at "+new Date().toTimeString())
            }
          });
      }
    );
  })


server.listen(3000, () => {
  console.log('listening on *:3000');
});
