var Request = require('request');
var cheerio = require('cheerio');
var item_text = [];
var item_link = [];
var Html;
Request('https://www2.gogoanime.io/', (error, response, html) => {

    Html = html;
});

module.exports = class scrabing_requests {

    scrabing_requests(req, res) {
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
                console.log(item_link[i]);

                Request(item_link[i]).pipe(res)
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
                });
    
                    res.end(JSON.stringify(item_text))

               

            });
        }

        
        if(req.url.substring(0, 7) == "/title/"){
            console.log('https://www2.gogoanime.io/' + req.url.substring(7, req.url.length));
            Request('https://www2.gogoanime.io/' + req.url.substring(7, req.url.length), (error, response, html) => {
                console.log('anime info will be scrabed');
                
                let $ = cheerio.load(html);
             let anime_info =  $('.anime-info').find('a').attr('href')
                    console.log(anime_info);
                    res.end(JSON.stringify(anime_info.substring(10, anime_info.length)))

               

            });
        }

        
      
        if(req.url.substring(0, 5) == "/info"){
            item_text = [];
            item_link = [];
            let re = req.url.substring(5, req.url.length).replace("(", "").replace(')', "");
            console.log('https://www2.gogoanime.io/' + re);
            Request('https://www2.gogoanime.io/category/' + re, (error, response, html) => {
                console.log('infooooooooooooo');
                console.log(re);
                
                let $ = cheerio.load(html);

                console.log( $('.anime_info_body_bg').find('img').attr('src'));
               let t = $('.anime_info_body_bg').find('img').attr('src');
                console.log("herrrrree");
                    var ep_start = $('#episode_page a.active').attr('ep_start');
                    var ep_end = $('#episode_page a.active').attr('ep_end');
                    var id = $("input#movie_id").val();
                    var default_ep = $("input#default_ep").val();
                    var alias = $("input#alias_anime").val();
                   
                    var url = 'https://ajax.apimovie.xyz/' + 'ajax/load-list-episode?ep_start=' + ep_start + '&ep_end=' + ep_end + '&id=' + id + '&default_ep=' + default_ep + '&alias=' + alias;
                    
                    Request(url , (error, response, html) => {
                        // console.log(response);
                         
                         let $ = cheerio.load(html);
                         console.log("herrrrree");
                         //item_link= $(".anime_info_body_bg").find('img').attr('src');
                         
                          $('ul[id="episode_related"]').children().each((i, element) => {
                              
                              item_text[i] = $(element).find('a').attr('href').substring(2); 
                              //console.log(item_text[i]);
                              //console.log("herrrrree");
                              item_link[i] = t;

                             // console.log(item_link[i]);
                            
                         })

                         res.end(JSON.stringify(item_text));


            });
        });
    }
    }
}