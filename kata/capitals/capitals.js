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
/*function displayCapitals(info) {
	var country, capital;
	var result = [];
	for (var i = 0; i < info.length; i++) {
		country = info[i].country || info[i].state;
		capital = info[i].capital;
		result.push("The capital of " + country + " is " + capital);
	}
	return result;
}*/

function displayCapitals(info) {
	return info.map(function(el) {
		return "The capital of " + (el.country || el.state) + " is " + el.capital;
	});
}