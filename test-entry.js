let lang = (navigator.language || navigator.userLanguage).substring(0, 2);
let Lang = {};

try {
	let en = require('./lang/en.json');
	try {
		let lan = require('./lang/' + lang + '.json');

		Object.assign(en, lan);
	} catch (exc) {
	}

	Lang = en;	
} catch (exc) {

}

let entry = require(window.innerWidth > window.innerHeight? '/index' : '/pad');

entry(Lang);