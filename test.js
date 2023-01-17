const fs = require('fs');
const EPUBToText = require('./index');
const epubToText = new EPUBToText;
const sourceFile = '/epubs/catcherintherye.epub';

epubToText.extract(__dirname + sourceFile, (sequences) => {
  fs.writeFileSync(`./parsed/${sourceFile.match(/\w+(?=\.)/)[0]}.json`, JSON.stringify(sequences));
});
