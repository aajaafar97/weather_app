var http = require('http');
const { listenerCount } = require('process');
var url ='http://api.openweathermap.org/data/2.5/weather?q=Livonia,US&appid=df295d4840fff059cfb4f1208b615576&units=imperial';

var server = http.createServer(function(request,response){
    var request=require('request');
    request(url,function(err,res,body){
        var data=JSON.parse(body);
        response.write("<html><body><div id='container'>");
        response.write("<h1>"+'City name - :'+data['name']+'<br>'+"</h1>");
        response.write("<h2"+'Temperature-:'+data.main['temp']+'<br>'+"</h2>");
        response.write("<h2>"+'SunSet Time-;'+ new Date(data.sys['sunset']*1000)+"</h2>");
        response.write("</div></body></html>");
        response.end();
    });
   
}).listen(8081);
