const WebSocket = require('ws');
const Rx = require('rxjs/Rx');


function wait(ms) {
    var start = +(new Date());
    while (new Date() - start < ms);
}

var MIN = 0
var MAX = 101


var wss = new WebSocket.Server({ port: 8080 });

console.log('Server listening on port 8080');

wss.on('connection', (ws) => {
	console.log('Client connected');
	while(ws.readyState == WebSocket.OPEN){
		var randValue = Math.floor(Math.random() * (MAX - MIN)) + MIN;
		ws.send(randValue);
		console.log(randValue);
		wait(1000);
	}
});

/*var array = [10, 20, 30];
var result = Rx.Observable.from(array);
result.subscribe(x => console.log(x));

console.log('hahahaha');

array.push(55);
result.forEach*/
