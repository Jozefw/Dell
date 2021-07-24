const  EmlParser = require('eml-parser');
const  fs = require('fs');



new EmlParser(fs.createReadStream('./text.eml'))
.getEmailBodyHtml()
.then(htmlString  => {
	fs.writeFileSync('abc.html',htmlString)	;
})
.catch(err  => {
	console.log(err);
})