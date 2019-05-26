var fs = require('fs')
var Request = require('request');
var cheerio = require('cheerio');

var Handling_file_request= require('./Handling_file_request');
var scrabing_requests= require('./scrabing_requests');
var requesting_videos_links = require('./requesting_videos_links');
// item text is the requested image text for the first site loading


module.exports = class Main {

   
    main(req, res) {
         // Handling required files requests----------------------------------->
        let HFR = new Handling_file_request;
        HFR.required_file (req,res);
       
        // handling Scrabing request----------------------------------------->
        let SR = new scrabing_requests;
        SR.scrabing_requests(req,res);

        // handling video request-------------------------------------------->       
        let RVL = new requesting_videos_links;
        RVL.requesting_videos_links(req,res);
    };
}