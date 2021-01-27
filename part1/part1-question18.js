for(let prop in statistics) {
	if(prop.toLowerCase()[0] == 'r') {
		console.log(prop);
	} else if(statistics[prop] % 2 === 1) {
		console.log(prop);
	}
}