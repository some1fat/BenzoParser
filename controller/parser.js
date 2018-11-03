const cheerio = require('cheerio');
const axios = require('axios');

exports.cParser = function(req, res) {
    if (req.body.url){
        axios.get(req.body.url)
            .then(function (response) {
                const $ = cheerio.load(response);
                res.send($('.panes').html());
            })
            .catch(function (error) {
                res.send(error);
            });
    } else {
        res.send('Error. Request param "URL" is not present in HTTP request.');
    }
};