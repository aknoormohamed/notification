var GCM = require('./lib/gcm.js').GCM;

var apiKey = 'AIzaSyCXm0RfP03tumhpmoF5Hbkp2i-g0beagJM';
var gcm = new GCM(apiKey);

var message = {
    registration_id: 'APA91bHGZ5E6WWY_rY9KGeEOz8rR3AMSCpr_pV4BVMPNnscHTbI8nVJcIyWOoZzJc84xgnqIDIMt5n6dpMFTLaAyJ7pPYPOkvCqx2OVc00knChFbFw8YWAEGVW09BYKvjGkXyoL2YfEe1kEXNHcDq3OjC-gSpoR9CQ', // required
   
    'data.title': 'ascvbd',
    'data.message': 'valadsffffffffffffffffffdasfasssssssssssssssssssssssssssadfasddddddddddddddddasdfasssssssssssssssssssssssue2'
    
};

gcm.send(message, function(err, messageId){
    if (err) {
        console.log("Something has gone wrong!");
    } else {
        console.log("Sent with message ID: ", messageId);
    }
});