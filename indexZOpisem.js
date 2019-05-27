var os = require('os');
var EventEmitter = require('events').EventEmitter;
var OSinfo = require('./modules/OSinfo');
var Timeinfo = require ('./modules/Timeinfo');

var emitter = new EventEmitter();

emitter.on('beforeCommand', function(instruction) {
    console.log('You wrote: ' + instruction + ' trying to run command.')
});
emitter.on('afterCommand', function() {
    console.log('Finished command');
});

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if(input !== null) {
        var instruction = input.trim();
        // odpalanie zdarzenia beforeCommand (z parametrem)
        emitter.emit('beforeCommand', instruction);

        switch(instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/sayhello':
                process.stdout.write('hello!\n');
                break;
            case '/getOSinfo':
                case '/getOSinfo':
                    OSinfo.print();
                    Timeinfo.changeTimeinfo();
                    break;
            default:
                process.stderr.write('Wrong instruction!\n');
        };
        // emitowanie zdarzenia afterCommand (bez parametru)
        emitter.emit('afterCommand');

    }
});
