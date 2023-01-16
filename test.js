var EPUBToText = require('./index');
var fs = require('fs');
var epubToText = new EPUBToText;

const saveParse = () => {
  const text = [];
  
  epubToText.extract(__dirname + '/epubs/catcherintherye.epub', (err, txt, sequence, meta) => {
    // console.log(sequence, meta)
  
    text.push(txt);
  });
  
  fs.writeFileSync('parsed.json', JSON.stringify(text));
};

saveParse();