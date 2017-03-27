var leagueName = context.getVariable("leagues.leagueName");

var leagueIds = {
    '426':'PremierLeague'
};

print("Week:" + context.getVariable("league.week"));
print("LeagueName:" + context.getVariable("league.leagueName"));
print("Year:" + context.getVariable("league.matchday"));
print("Query:" + context.getVariable("league.query"));