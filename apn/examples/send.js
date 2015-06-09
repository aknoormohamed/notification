"use strict";

var apn = require ("../index.js");

 var message = new apn.notification();

    message.expiry = Math.floor(Date.now() / 1000) + 3600; // Expires 1 hour from now.
    
    message.sound = "ping.aiff";
    message.setAlertText("You have new ");
   

    var options = {  "pfx":"Certificates.p12" , "passphrase": "valiant123" };
    var service = new apn.connection(options);

    service.on('connected', function() {
        console.log("Connected");
    });

    service.on('transmitted', function(notification, device) {
        console.log("Notification transmitted to:" + device.token.toString('hex'));
    });

    service.on('transmissionError', function(errCode, notification, device) {
        console.error("Notification caused error: " + errCode + " for device ", device, notification);
    });

    service.on('timeout', function () {
        console.log("Connection Timeout");
    });

    service.on('disconnected', function() {
        console.log("Disconnected from APNS");
    });

    service.on('socketError', console.error);

    var deviceId = "631050e4c87fc84fd8d82ced82e0f8a031586fc780873d4dbf61f4f9a7cf5c3a";
    var device = new apn.Device(deviceId); 
    service.pushNotification(message, device);