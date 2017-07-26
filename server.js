var express            = require('express');
var app                = express();
var fs                 = require('fs');
var request            = require('request');
//var api                = require('./routes/api');
var opsgenie           = require('opsgenie-sdk');

// ROUTE
//app.use('/',api);

app.listen('8081')



opsgenie.configure({
    'api_key': '535106a3-0dd3-4c25-a40a-63bf8f1cd5cf'
});


var list_alert_json = {
     query : "status : closed",
     offset : 0,
     limit : 10,
     sort : "createAt",
     oder : "desc"
 };

 opsgenie.alertV2.list(list_alert_json, function (error, alerts) {
     if (error) {
         console.error(error);
     } else {
        var obj = JSON.parse(alerts);

         //console.log("List Alert Response");
         //console.log(JSON.parse(alerts).data)
         //for(var x=0; x<alerts.length; x++) {
           //console.log(alerts[x]);
         //}
         console.log(obj);
     }
 });

 var get_alert_identifier = {
     identifier: "7055",
     identifierType: "tinyId"
 };

 opsgenie.alertV2.get(get_alert_identifier, function (error, alert) {
     if (error) {
         console.log(error);
     } else {
         console.log("Get Alert Response");
         console.log(alert);
     }
 });

curl -XGET 'https://api.opsgenie.com/v1.1/json/schedule/whoIsOnCall?apiKey=535106a3-0dd3-4c25-a40a-63bf8f1cd5cf&name=quokka.one_lvl1_FirstResonder_schedule'


console.log('Server Running at 8081');

//exports = module.exports = app;
