var express = require('express');
var usergrid = require('usergrid');

var app = express();
app.use(express.bodyParser());


var client = new usergrid.client({
	'orgName' : 'markcourtney',
	'appName' : 'players',
	'client_id': 'b3U68vghI6FmDSCd34e4Gtzz0A',
	'client_secret': 'b3U6QPkNDDSedF4sel3MCJ0haHKynew',
	'authType' : usergrid.AUTH_CLIENT_ID
});

var rootTemplate = {
	'employees' : {
		'href' : './employees'
	}
};

app.get('/', function(req, resp) {
	resp.jsonp(rootTemplate);
});

console.log(client);

//var UsergridClient = require('./node_modules/usergrid/lib/client');
//var client = new UsergridClient({
//	'orgId':'markcourtney',
//    'appId':'players'
//});
//https://apibaas-trial.apigee.net/markcourtney/players/matchdays

//
//var Usergrid = require('usergrid')
//Usergrid.init({
//	'orgId':'markcourtney',
//    'appId':'players'
//})

//Specify the options for the request

//var Usergrid = require('usergrid')


//var dataClient = new Usergrid.client({
//Usergrid.init({
//    orgId:'markcourtney',
//    appId:'players'
//});
//
//var express = require('express');
//var UsergridClient = require('./node_modules/usergrid/lib/client');
//var UsergridAppAuth = require('./node_modules/usergrid/lib/appAuth');
//
////Usergrid.setAppAuth('<client-id>', '<client-secret>')
//
//var Usergrid = new UsergridClient({
//    "orgId": "markcourtney",
//    "appId": "players",
//    "name":"guest",
//    "baseUrl":"https://apibaas-trial.apigee.net/",
//    "client_id": "b3U68vghI6FmDSCd34e4Gtzz0A",
//    "client_secret": "b3U6QPkNDDSedF4sel3MCJ0haHKynew",
//    "authType":usergrid.AUTH_CLIENT_ID
//});
//Usergrid.authMode = UsergridAppAuth.AUTH_MODE_NONE;
//
////Usergrid.setAppAuth(new UsergridAppAuth("b3U68vghI6FmDSCd34e4Gtzz0A", "<client-secret>"));
////Usergrid.authenticateApp(); 
//
////var options = {
////	endpoint:"matchdays", //management token endpoint
////	method:"GET",
////	body: {
////	    grant_type: "client_credentials",
////    }
////}
//
//console.log("Get Matchday: " + Usergrid.GET("matchday"));
//
//Usergrid.GET("matchdays", function(error, usergridResponse, entities) {
////	console.log(usergridResponse);
////	console.log("Error" + error);
//	console.log(entities);
//    // entities is an array of UsergridEntity objects 
//});

//var matchdayOptions = {
//	    host: 'apibaas-trial.apigee.net',
//	    path: '/markcourtney/players/matchdays',
//	    method: 'PUT',
//	    headers: {
//	        accept: 'application/json'
//	    }
//};

//Usergrid.authenticateUser({
//    username: 'immarkc@gmail.com',
//    password: 'miKram42'
//}, function(error, usergridResponse, token) {
//	console.log(token);
//    // Usergrid.currentUser is set to the authenticated user and the token is stored within that context 
//})


//,
//"clientId": "b3U6KYKErfIlEeaEdxIuBzeXfQ",
//"clientSecret": "b3U69cO_iDvpEnhAsZOKNMZzJQawMHI"

//Usergrid.setAppAuth("b3U6KYKErfIlEeaEdxIuBzeXfQ", "b3U69cO_iDvpEnhAsZOKNMZzJQawMHI");  
//
//Usergrid.authenticateApp(function(error, usergridResponse, token) {    
//	if (error){      
//	  console.log("NEW_REMOTE_CONTROLLER: authenticateApp error = "+JSON.stringify(error));    
//	} 
//	else {      
//	console.log("NEW_REMOTE_CONTROLLER: authenticateApp usergridResponse = "+JSON.stringify(usergridResponse)); 
//	     
//	console.log("NEW_REMOTE_CONTROLLER: authenticateApp token = "+JSON.stringify(token));   
//	}})  


//"clientId": "YXA6Out1FfIlEeaaOArYgfQDvw",
//"clientSecret": "YXA6KZHQ50KVWbjnTERM6RZppGFPNxA"


//var request = http.request(matchdayOptions, function(response) {
//	console.log(response);
//});



//var options = {
//	endpoint:"matchdays", //don't forget to append '/?ql='
//	method:"PUT",
//	body: {"availability":"in-stock"}
//}
//
//client.request(options,function (error,result) {
//
//    if (error) { 
//    	console.log(error);
//        //error
//	} else { 
//    	console.log("Hits");
//		//success
//	}
//
//});  