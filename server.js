var express = require('express');
var app = express();
app.get('/',function (require, response) {
    response.end('server running handle / request')
});
app.post('/test',function(require , response){
    console.log('require, require');
    response.end ('request handlefrom server get route / test');

});
app.listen (8080, function (){
    console.log('express server running on port 8080');
});