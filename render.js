let ejs = require('ejs')
let fs = require('fs')
// let data = require('./test-data/data.json')
let data = require('./test-data/howtobuyheroin.json')

ejs.renderFile('./templates/index.ejs', data, {}, function(err, str) {
    if(err) {
        console.log(err)
    } else {
        // console.log(str)
        fs.writeFile('index.html', str, function (err) {
            if (err) return console.log(err);
        });
    }
})
