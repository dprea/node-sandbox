'use strict'

// Dependencies
var http = require('http'),
    fs = require('fs'); // File System

// Define Server Object
var server = {
    
    serveHome: function() {
        // Read Home Page File.
        fs.readFile('./index.html', function(err, html) {
        
            // ERROR HANDLER
            if(err) {
              throw err; 
            } else { 
                // SUCCESS HANDLER
                http.createServer(function(req, res) {
                   res.writeHead(200, {'Content-Type': 'text/html'});
                   res.write(html);
                   res.end();
                }).listen(process.env.PORT, process.env.IP); // (8080) also works, but c9 uses the process.env.*
            }
            // Output Server Information to Node Server Console.    
            console.log('Started Server at http://127.0.0.1:8181/');
        });
    }
    
};

// Instantiate the Server Object. 
server.serveHome();