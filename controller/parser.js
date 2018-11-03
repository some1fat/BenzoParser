const cheerio = require('cheerio');
const axios = require('axios');

exports.cParser = function(req, res) {
    if (req.body.html){
        axios.get(req.body.html)
            .then(function (response) {
                //const $ = cheerio.load(response);
                //res.send($('.panes').html());
                res.send(response);
            })
            .catch(function (error) {
                res.send(error);
            });
    } else {
        res.send('Error. Request param "HTML" is not present in HTTP request.');
    }
};