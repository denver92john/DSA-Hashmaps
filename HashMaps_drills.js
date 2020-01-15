const HashMap = require('./hashmap');

function main() {
    const lotr = new HashMap();
	lotr.set('Hobbit', 'Bilbo');
	lotr.set('Hobbit', 'Frodo');
	lotr.set('Wizard', 'Gandolf');
	lotr.set('Human', 'Aragon');
	lotr.set('Elf', 'Legolas');
	lotr.set('Maiar', 'The Necromancer');
	lotr.set('Maiar', 'Sauron');
	lotr.set('RingBearer', 'Gollum');
	lotr.set('LadyOfLight', 'Galadriel');
	lotr.set('HalfElven', 'Arwen');
	lotr.set('Ent', 'Treebeard');

	//console.log(lotr);

	let maiar = lotr.get('Maiar');
	console.log(maiar)

	let hobbit = lotr.get('Hobbit');
	console.log(hobbit);
}

main();