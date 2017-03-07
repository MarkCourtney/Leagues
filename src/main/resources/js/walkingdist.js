var fs = require('fs');
var path = require('path');

// get walking directions from central park to the empire state building
var http = require("http");

// get is a simple wrapper for request()
// which sets the http method to GET

var matchDayDir = path.join(__dirname, '..', '/data/matchday');

//https://apibaas-trial.apigee.net/markcourtney/players/matchdays



var options = {
	    host: 'api.football-data.org',
	    path: '/v1/soccerseasons/398/leagueTable/?matchday=' + matchDayIndex,
	    method: 'GET',
	    headers: {
	        accept: 'application/json',
        	'X-Auth-Token':'f98dfbb1e75248fd9117437b9f2f8d2f'
	    }
};
    
for(var matchDayIndex = 1; matchDayIndex < 3; matchDayIndex++) {
    
	var request = http.get(options, function (response) {
	    
	    var buffer = "", 
	        data;
	
	    response.on("data", function (chunk) {
	        buffer += chunk;
	    }); 
	
	    response.on("end", function (err) {
	        data = JSON.parse(buffer);
	    
	    	ensureDirectoryExistence(matchDayDir);
	    	
	    	data.id = 'PL1516';
	
	        deleteLinksKeyElement(data);
	        
	    	for(var index=0; index< data["standing"].length; index++){
	    		deleteLinksKeyElement(data.standing[index])
	    	}

	        fs.writeFile(matchDayDir + '/MatchDay' + data.matchday + '.json', 
	        		JSON.stringify(data, null, 2), 
	        		function(err) {
	            if(err) {
	                return console.log("Error:" + err);
	            }
	        });
	    }); 
	}); 
}


request.end();

function updateCollection() {
	
}


function deleteLinksKeyElement(jsonObject){
    for(var key in jsonObject) {
	     if(key == "_links") {
	         delete jsonObject._links;
	     }
	}
}


function ensureDirectoryExistence(filePath) {
	  var dirname = path.dirname(filePath);
	  if (fs.existsSync(dirname)) {
	    return true;
	  }
	  ensureDirectoryExistence(dirname);
	  fs.mkdirSync(dirname);
	}
