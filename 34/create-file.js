var fs = require('fs');
var file = fs.createWriteStream('demo.txt');

for (var i = 0; i <= 1000000; i++) {
    file.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dignissimos iste, non odit repellendus reprehenderit saepe tempora temporibus! Amet cumque id molestiae nulla, provident qui recusandae voluptatem. Aperiam nihil, tempora.');
}
file.end();