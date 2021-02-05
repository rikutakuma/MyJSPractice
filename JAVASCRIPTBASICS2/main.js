'use strict';

{
	// const score1 = 80;
	// const score2 = 90;
	// const score3 = 40;

	const otherScores = [10, 20];
	const scores = [80, 90, 40, 70, ...otherScores];

	function sum(a, b) {
		console.log(a + b);
	}
	
	sum(...otherScores);
	// scores.push(60, 50);
	// scores.shift();
	//90, 40, 70, 60, 50

	//scores.splice(1, 1, 40, 50);
	// console.log(scores[1]);

	// scores[2] = 44;
	// console.log(scores);

	// console.log(scores.length);

	// for (let i = 0; i < 3; i++) {
		for (let i = 0; i < scores.length; i++) {
		console.log(`Score ${i}: ${scores[i]}`);
	}
}























