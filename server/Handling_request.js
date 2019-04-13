var http = require('http')
var fs = require('fs')
var Request = require('request');
var cheerio = require('cheerio')
var Html;
// item text is the requested image text for the first site loading
var item_text = [];
var item_link = [];
Request('https://www14.gogoanimes.tv/', (error, response, html) => {

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
        if (req.url.substring(0, 5) == "/sear") {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            var RS = fs.createReadStream(__dirname + '/../build/index.html')
            RS.pipe(res);
            console.log(req.url.substring(0, 5));
            console.log(req.url.substring(5, req.url.length));
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
        if (req.url == '/requesting_items') {
            let $ = cheerio.load(Html);

            $('.name').each((i, element) => {
                item_text[i] = $(element).children().attr('href').substring(1);

            });

            $('.img').each((i, element) => {
                item_link[i] = $(element).find('a img').attr('src');
                console.log(item_link[i]);

            });


            res.end(JSON.stringify(item_text))

        }

        for (let i = 0; i < item_text.length; i++) {
            const element = '/' + item_text[i];
            if (req.url == element) {
                //console.log('https://images.gogoanime.tv/cover'+element+'.png');

                Request(item_link[i]).pipe(res)
            }
        }
        for (let i = 0; i < item_text.length; i++) {
            const element = '/videos/' + item_text[i];

            if (req.url == element) {
                console.log('enter');
                Request('https://www14.gogoanimes.tv/' + item_text[i], (error, response, html) => {
                    console.log('enter');
                    let $ = cheerio.load(html);
                    let video = $('.rapidvideo').find('a').attr('data-video');
                    console.log(video);

                    Request(video + '&q=720p', (error, response, html) => {
                        console.log('enter2');
                        let $ = cheerio.load(html);
                        let video_mp4 = $('.video-js').find('source').attr('src');
                        console.log(video_mp4);

                        res.end(JSON.stringify(video_mp4));


                    });
                });
            }
        }

        if(req.url.substring(0, 5) == "/Sear"){
            console.log(req.url.substring(5, req.url.length));
             item_text = [];
             item_link = [];
            Request('https://www2.gogoanime.io/search.html?keyword=' + req.url.substring(5, req.url.length), (error, response, html) => {
                console.log('search will be made');
                let $ = cheerio.load(html);
                $('.name').each((i, element) => {
                    item_text[i] = $(element).children().attr('title').replace(/ /g, "-");
                    console.log(item_text[i]);
                });
    
                $('.img').each((i, element) => {
                    item_link[i] = $(element).find('a img').attr('src');
                    //console.log(item_link[i]);
    
                });
    
                    res.end(JSON.stringify(item_text))

               

            });
        }



    };
}