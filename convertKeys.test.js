const { expect } = require("@jest/globals");
const convertKeys = require("./convertKeys");

test("returns the weekdays as key along with their frequency as object", () => {
	testData = {
		"2021-01-01": 4,
		"2021-01-02": 5,

		"2021-01-07": 8,
		"2021-01-05": 10,
	};
	expectedData = { Friday: 4, Saturday: 5, Thursday: 8, Tuesday: 10 };

	expect(convertKeys(testData)).toStrictEqual(expectedData);
});
