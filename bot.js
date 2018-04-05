var config = require('./config');

console.log("The bot is starting");

var Twit = require('twit');
var T = new Twit(config);

var params = {
    screen_name: 'jopplas',
    count: 2
}

T.get('statuses/user_timeline', params, gotData);

function gotData(err, data, response) {
    var tweets = data;
    for(var i = 0; i < tweets.length; i++){
        console.log(tweets[i].text);
    }
};