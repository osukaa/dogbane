var cipolla = require('cipolla');
var onion = require('onion');
var fs = require('fs');

var main = function () {

    onion.getAST('./markdown/polls.md', function (err, warnings, tree) {

        console.log('warnings if any >',warnings);
        fs.writeFile('./tree.json', JSON.stringify(tree), function (err) {

            console.log('finished writing file',err);
            var generator = new cipolla(require('cipolla-test-theme'));
            generator.render(tree, function (err, html) {

                console.log('Generated HTML',html,'err',err);
                fs.writeFile('./output.html', html, function (err) {

                    console.log('finished writing file',err);
                });
            });
        });
    });
}

module.exports = main();
