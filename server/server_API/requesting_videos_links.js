var Request = require('request');
var cheerio = require('cheerio');

var webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const {Builder, By, Key, until} = require('selenium-webdriver');


module.exports = class requesting_videos_links {

   
    requesting_videos_links(req, res) {
        if(req.url.substring(0, 8) == "/sideos/"){
            const screen = {
                width: 640,
                height: 480
              };
              
              let driver = new Builder()
                  .forBrowser('chrome')
                  .setChromeOptions(new chrome.Options().headless().windowSize(screen))
                  .build();
                  
            console.log(req.url.substring(5, req.url.length));
            Request('https://www2.gogoanimes.tv/' + req.url.substring(8, req.url.length), (error, response, html) => {
                console.log('enter');
                let $ = cheerio.load(html);
                let video = $('.rapidvideo').find('a').attr('data-video');
                console.log(video);
                let videoss = $('.anime').find('a').attr('data-video');
                console.log(videoss);

                driver.get(videoss);
                setTimeout(function(){  driver.findElement(webdriver.By.className('jw-video')).getAttribute("src")
                .then(function(the_id) {
                  console.log(the_id);
                  res.end(JSON.stringify(the_id));

                  driver.quit();
                  });
            
              },600);
            //     Request(video + '&q=720p', (error, response, html) => {
            //         console.log('enter2');
            //         let $ = cheerio.load(html);
            //         let video_mp4 = $('.video-js').find('source').attr('src');
            //         console.log(video_mp4);

            //         res.end(JSON.stringify(video_mp4));

            // });

            // Request( 'https://www3.gogoanime.io/black-clover-tv-episode-83', (error, response, html) => {
            //     // console.log(response);
            //      console.log("server is getting the request------------------------>");
            //      let $ = cheerio.load(html);
            //      let video = 'https:'+$('.anime').find('a').attr('data-video');
            //      console.log(video);
 
            //      driver.get(video);
            //      setTimeout(function(){  driver.findElement(webdriver.By.className('jw-video')).getAttribute("src")
            //      .then(function(the_id) {
            //        console.log(the_id);
                   
            //        });
             
            //    },600);
               
               
                
                
            //      // driver.findElement(webdriver.By.name('btnG')).click();
            //      // driver.wait(webdriver.until.titleIs('webdriver - Google Search'), 1000);
            //      //driver.quit();
                 
            //      });
        }
        );}
    }
}