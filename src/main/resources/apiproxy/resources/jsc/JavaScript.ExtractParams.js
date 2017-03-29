var calloutResponse = JSON.parse(context.getVariable("calloutResponse.content"));
var standings = JSON.parse(context.getVariable("standings"));
var position = context.getVariable("league.position");

print('standings' + JSON.stringify(standings.standing[position-1]));

context.setVariable("position", standings.standing[position-1]);