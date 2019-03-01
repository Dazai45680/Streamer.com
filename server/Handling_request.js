var http = require('http')
var fs = require('fs')
var Request = require('request');
var cheerio = require('cheerio')
var Html;
// item text is the requested image text for the first site loading
var item_text = [];
var item_link = [];
Request('https://www11.gogoanimes.tv/' , (error , response , html) =>{
      
    Html = html;
});

module.exports = class Handling_Request {

    // Handling required files requests----------------------------------->

    required_file(req, res) {

        if (req.url == '/') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            var RS = fs.createReadStream(__dirname + '/../build/index.html')
            RS.pipe(res);
        }
        if (req.url.split('.').pop() == 'css') {
            res.writeHead(200, { 'Content-Type': 'text/css' });
            var RS = fs.createReadStream(__dirname + '/../build/' + req.url)
            RS.pipe(res);
        }

        if (req.url.split('.').pop() == 'js') {
            res.writeHead(200, { 'Content-Type': 'text/javascript  ' });
            var RS = fs.createReadStream(__dirname + '/../build/' + req.url)
            RS.pipe(res);
        }

        if (req.url.split('.').pop() == 'png') {
            res.writeHead(200, { 'Content-Type': 'image/png' });
            var RS = fs.createReadStream(__dirname + '/../build/' + req.url)
            RS.pipe(res);
        }
        if (req.url.split('.').pop() == 'gif') {
            res.writeHead(200, { 'Content-Type': 'image/gif' });
            var RS = fs.createReadStream(__dirname + '/../build/' + req.url)
            RS.pipe(res);
        }
        // handling Scrabing request----------------------------------------->
        if(req.url == '/requesting_items'){
            let $ = cheerio.load(Html);
            
            $('.name').each((i ,element)=>{
                item_text[i] = $(element).children().attr('href').substring(1);
                
            });
            
            $('.img').each((i ,element)=>{
                item_link[i] = $(element).find('a img').attr('src');
                console.log(item_link[i]);
                
            });

            
            res.end(JSON.stringify(item_text))
            
        }

        for (let i = 0; i < item_text.length; i++) {
            const element = '/' + item_text[i];
            if(req.url == element){
                //console.log('https://images.gogoanime.tv/cover'+element+'.png');
                
               Request(item_link[i]).pipe(res)
            }
        }

      
       
    };
}