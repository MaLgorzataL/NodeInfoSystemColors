var os = require('os');
var colors = require('colors');


var setTimeinfo = function () {
    var time = os.uptime;
    var tabTime = [];
    tabTime[0] = (time /3600).toFixed(0); // ilość godzin
    tabTime[1] = ((time - tabTime[0]*3600)/60).toFixed(0); // ilość minut po odliczeniu godzin
    tabTime[2] = time - tabTime[0]*3600 - tabTime[1]*60; // ilość sekund
    console.log(colors.green('Uptime: ~'), (time / 60).toFixed(0), 'min');
    console.log(colors.rainbow('Uptime: ~'),tabTime[0],'godz.' ,tabTime[1] , 'minut', tabTime[1], 'sekund');

 }
exports.changeTimeinfo = setTimeinfo;
