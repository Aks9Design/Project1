var http = require('http');
var url = require('url');

function start (route, handle) {
	http.createServer(function onRequest(request, response) { 
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");
		route(handle, pathname, response, request);	
		//response.writeHead(200, {"Content-Type": "text/plain"}); 
		//response.write("Hello oo World");
		//response.end();
	}).listen(8888);
	//http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;