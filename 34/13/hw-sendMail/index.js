var fs = require('fs'),
    nodemailer = require("nodemailer"),  //npm install nodemailer
    data_to_append = 'Новый текс, с новой строки';

const newLineChar = process.platform === 'win32' ? '\r\n' : '\n';


fs.appendFileSync('text.txt', `${newLineChar}${data_to_append}`);
var content = fs.readFileSync('text.txt', 'utf8');
console.log(content);


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'taranosov92@gmail.com',
        pass: 'pass'
    }
});

var mailOptions = {
    from: 'taranosov92@gmail.com',
    to: 'taranosov.k@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});


