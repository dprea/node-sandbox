'use strict'

/**
 * Main Application File
 * 
 * @author: Dustin Rea
 */

// Dependencies
var http = require('http'),
    fs = require('fs'), 
    url = require('url'),
    nodeRTC = require('nodertc'); // Homemade Local Module

// Define Server Object
var server = http.createServer(function(req, res) {
    var reqPath = url.parse(req.url, true);
    var action = reqPath.pathname;
    
    // disallow non get requests
    if (req.method !== 'GET') {
        res.writeHead(405, {'Content-Type': 'text/plain' });
        res.end('405 Method Not Allowed');
        return;
    }
    
    // Routes
    // TODO: Refactor to handle multiple routes
    // 1. Get String.extension
    // 2. Switch case for extensions
    // 3. Load Proper MIME Type based on extension
    // 4. Handle Errors before writeHead.
    if (action === '/') {
        // Read Home Page File.
        fs.readFile('./index.html', function(err, html) {
            // ERROR HANDLER
            if(err) {
              throw err;
            }
            nodeRTC.logLoaded();
            nodeRTC.getUserVideoandAudio();
            //nodeRTC.getUserVideoandAudio();
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(html, 'utf8');
            res.end();
        }); // END fs.readFile();
    }

    if(action == '/client/assets/css/style.css') {
        res.writeHead(200, {'Content-Type': 'text/css'});
        var styleSheet = fs.readFileSync('./client/assets/css/style.css');
        res.write(styleSheet);
        res.end();
        return;
    }
    
    if(action == '/client/assets/js/client-main.js') {
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        var clientJS = fs.readFileSync('./client/assets/js/client-main.js');
        res.write(clientJS);
        res.end();
        return;
    }
    
    if(action == '/client/bower_components/webrtc-adapter/adapter.js') {
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        var adapterJS = fs.readFileSync('./client/bower_components/webrtc-adapter/adapter.js');
        res.write(adapterJS);
        res.end();
        return;
    }
    
    // Output Server Information to Node Server Console.    
    console.log('Started Server at http://127.0.0.1:8080/');
    
}); // END var server = http.createServer(req, res, function() {});

server.listen(process.env.PORT, process.env.IP); // (8080) also works, but c9 uses the process.env.*