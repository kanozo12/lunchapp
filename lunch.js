const request = require('request');
const cheerio = require('cheerio');


request('http://www.naver.com', (err, res, body)=>{
    if(err){
        console.log(err);
        return;
    }
    
    let $ = cheerio.load(body);
    let list = $(".ah_roll_area > .ah_l > li > a > .ah_k");

    [].forEach.call(list, x => {
        console.log($(x).text());
    })
});
