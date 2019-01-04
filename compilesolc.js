var solc = require('solc');
var fs = require('fs');

fs.readFile('x.txt', 'utf8', function(err, data) {
    var output = JSON.parse(solc.compile(JSON.stringify(data)));
    console.log(output);
    // var output = JSON.parse(solc.compileStandard(JSON.stringify(data)));
    // console.log(output);
});

