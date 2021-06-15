let ejs = require('ejs')
let fs = require('fs')
let data = require('./test-data/data.json')

ejs.renderFile('./templates/index.ejs', data, {}, function(err, str) {
    if(err) {
        console.log(err)
    } else {
        // console.log(str)
        fs.writeFile('test_output.html', str, function (err) {
            if (err) return console.log(err);
        });
    }
})
