var http = require('http');
var url = require('url');


http.createServer(function (req, res) {
   
 var q = url.parse(req.url, true).query;

    if( typeof(q.operation) !== "undefined" && q.operation){
       if(typeof(q.fnumber)!=="undefined"&& q.fnumber){
        if(typeof(q.snumber)!=="undefined"&& q.snumber){
        var result;
    switch(q.operation){
        case "addition":
            result = q.fnumber+q.snumber;
            var txtAdd = q.fnumber+ " + "+q.snumber +" is "+ result;
           res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(txtAdd);
            break;
        case "substraction":
            result = q.fnumber-q.snumber;
            var txtSub = q.fnumber+ " - "+q.snumber +" is "+ result;
             res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(txtSub);
            break;
        case "multiplication":
            result = q.fnumber*q.snumber;
            var txtMul = q.fnumber+ " * "+q.snumber +" is "+ result;
             res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(txtMul);
            break;
        case "division":
            result = q.fnumber/q.snumber;
            var txtDiv = q.fnumber+ " / "+q.snumber +" is "+ result;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(txtDiv);
            break; 
        default :
           res.writeHead(404, {'Content-Type': 'text/html'});
            res.end("Operation not found");
    }         
        }else{
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.end("Operation can not be found");  
           
        }        
    } else{
          res.writeHead(404, {'Content-Type': 'text/html'});
            res.end("First number can not be found");
       
    }
       } else{
                 res.writeHead(404, {'Content-Type': 'text/html'});
            res.end("Second number can not be found"); 
        
                  }
                 
   
}).listen(8080);