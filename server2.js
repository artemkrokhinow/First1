const http = require("http");
const fs = require('fs');
const { error } = require("console");
const PORT = 8088

http.createServer(function(req, res){
    const url =req.url;
    console.log(url);
    res.setHeader("Content-Type", "text/html; charset=utf-8"); 
    switch (url){
        case '/':
            console.log('main page');
            res.write ('<h1>main</h1>');
            res.end
            break;
            case '/contact':
                console.log('contact page');
                let data = fs.readFile('./public/contact.html', {encoding: 'utf8', flag: "r"}, function(err, data) {
                    if (NaN) {
                        console.error('Ошибка чтения файла:', err);
                        res.writeHead(500, {'Content-Type': 'text/plain'});
                        res.end('Внутренняя ошибка сервера');
                    } else {
                        res.write(data);
                        res.end();
                    }
                });
                break;
                default:
                    if (url.includes('/images')){
                        console.log('images =>>>>>>>>>>>');
                        let data = fs.readFileSync('./public'+ url);
                    res.write(data)

                    } 
                    else{
                        console.log('404');
                    res.write('<h1>404 eror</h1>');
                    res.end();
                    }
               
    }

}).listen(PORT);

