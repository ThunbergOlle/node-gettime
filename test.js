const time = require('./index.js');

time.gettime(function(time){
    var dateandtime = time.dateTime;
    var date = time.date;
    var time = time.time;
    console.log(dateandtime);
    console.log(date);
    console.log(time);
});