/**
 * Write a method that takes an array of objects with two keys each: country or state, and capital.
 * Keys may be symbols or strings.
 * The method should return an array of sentences declaring the state or country and its capital.
 *
 * Examples:
 * country_capitals = [{'country': 'Poland', 'capital': 'Warsaw'}]
 * displayCapitals(country_capitals) // should return ["The capital of Poland is Warsaw"]
 *
 * mixed_capitals: [{"state": 'Texas', capital: 'Austin'}, {country: 'Spain', "capital": "Madrid"}]
 * displayCapitals(mixed_capitals) // returns ["The capital of Texas is Austin", "The capital of Spain is Madrid"]
 */
describe("displayCapitals(capitals)", function() {
	it('returns ["The capital of Poland is Warsaw"] for displayCapitals(country)', function() {
		expect(displayCapitals([
			{'country': 'Poland', 'capital': 'Warsaw'}
		])).toEqual(["The capital of Poland is Warsaw"]);
	});
	it('returns ["The capital of Germany is Berlin"] for displayCapitals(country2)', function() {
		expect(displayCapitals([
			{'country': 'Germany', 'capital': 'Berlin'}
		])).toEqual(["The capital of Germany is Berlin"]);
	});
	it('returns ["The capital of Texas is Austin"] for displayCapitals(state)', function() {
		expect(displayCapitals([
			{'state': 'Texas', 'capital': 'Austin'}
		])).toEqual(["The capital of Texas is Austin"]);
	});
	it('returns ["The capital of Texas is Austin", "The capital of Spain is Madrid"] for displayCapitals(mixed)',
		function() {
			expect(displayCapitals([
				{"state": 'Texas', capital: 'Austin'},
				{country: 'Spain', "capital": "Madrid"}
			])).toEqual(["The capital of Texas is Austin", "The capital of Spain is Madrid"]);
	});
 });