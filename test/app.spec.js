/* Write a program that prints numbers from 1 to 100. But for multiples of 3 print "Fizz" instead of the number
   and for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5 print "FizzBuzz".
 */
describe("fizzBuzz(n)", function() {
	it("returns 1 for fizzBuzz(1)", function() {
		expect(fizzBuzz(1)).toBe(1);
	});
	it("returns 2 for fizzBuzz(2)", function() {
		expect(fizzBuzz(2)).toBe(2);
	});
	it("returns 'Fizz' for fizzBuzz(3)", function() {
		expect(fizzBuzz(3)).toBe("Fizz");
	});
	it("returns 'Buzz' for fizzBuzz(5)", function() {
		expect(fizzBuzz(5)).toBe("Buzz");
	});
	it("returns 'Fizz' for fizzBuzz(6)", function() {
		expect(fizzBuzz(6)).toBe("Fizz");
	});
	it("returns 'Buzz' for fizzBuzz(10)", function() {
		expect(fizzBuzz(10)).toBe("Buzz");
	});
	it("returns 'FizzBuzz' for fizzBuzz(15)", function() {
		expect(fizzBuzz(15)).toBe("FizzBuzz");
	});
});

describe("fizzBuzzRange(start, end)", function() {
	it("returns [1, 2, 'Fizz', 4, 'Buzz', 'Fizz'] for fizzBuzzRange(1, 6)", function() {
		expect(fizzBuzzRange(1, 6)).toEqual([1, 2, 'Fizz', 4, 'Buzz', 'Fizz']);
	});
	it("returns [97, 98, 'Fizz', 'Buzz'] for fizzBuzzRange(97, 100)", function() {
		expect(fizzBuzzRange(97, 100)).toEqual([97, 98, 'Fizz', 'Buzz']);
	});
});