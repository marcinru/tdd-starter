/* Write a program that prints numbers from 1 to 100. But for multiples of 3 print "Fizz" instead of the number
   and for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5 print "FizzBuzz".
 */
function fizzBuzz(n) {
	if (n % 15 === 0) {
		return "FizzBuzz";
	};
	if (n % 5 === 0) {
		return "Buzz";
	};
	if (n % 3 === 0) {
		return "Fizz";
	};
	return n;
}

function fizzBuzzRange(start, end) {
	var result = [];
	for (var i = start; i <= end; i++) {
		result.push(fizzBuzz(i));
	};
	return result;
}
