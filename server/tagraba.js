var http = require('http')
var fs = require('fs')
var Request = require('request');
var cheerio = require('cheerio');
var webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const {Builder, By, Key, until} = require('selenium-webdriver');

const screen = {
  width: 640,
  height: 480
};

let driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options().headless().windowSize(screen))
    .build();
    var server = http.createServer(function (req ,res) {
  
    
    if (req.url == '/') {
    
 
            // item text is the requested image text for the first site loading

            Request( 'https://www3.gogoanime.io/black-clover-tv-episode-83', (error, response, html) => {
               // console.log(response);
                console.log("server is getting the request------------------------>");
                let $ = cheerio.load(html);
                let video = 'https:'+$('.anime').find('a').attr('data-video');
                console.log(video);

                driver.get(video);
                setTimeout(function(){  driver.findElement(webdriver.By.className('jw-video')).getAttribute("src")
                .then(function(the_id) {
                  console.log(the_id);
                  
                  });
            
              },600);
              
              
               
               
                // driver.findElement(webdriver.By.name('btnG')).click();
                // driver.wait(webdriver.until.titleIs('webdriver - Google Search'), 1000);
                //driver.quit();
                
                });
              } 
            }); 


            server.listen(3000);