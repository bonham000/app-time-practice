// INSTRUCTIONS:
//
// Look a lines 9 to 17. There is a function called concatStrings.
// Your job is to complete the body of this function so that it returns
// the two string arguments, added together into one string, and
// separated by a single space. So for example:
// concatStrings("a", "b") should return "a b"

// Only change code below this line

function concatStrings(stringOne, stringTwo) {
  // Add code here
}

// Only change code above this line

// Code to test your function:
function testFunction() {
  const TEST_CASES = [
    { input: ["a", "b"], expected: "a b" },
    { input: ["apples", "bananas"], expected: "apples bananas" },
    { input: ["nice", "zoo"], expected: "nice zoo" }
  ];

  let passed = true;

  TEST_CASES.forEach(testCase => {
    const { input, expected } = testCase;
    const result = concatStrings(...input);
    if (result !== expected) {
      passed = false;
      console.error(`Test FAILED for input: ${input}`);
      console.error(`- received: ${result}, expected: ${expected}\n`);
    } else {
      console.log(`Test PASSED for input: ${input}`);
    }
  });

  if (passed) {
    console.log("\n- All tests PASSED, great job!!!");
  }
}

// Run the tests
console.clear();
testFunction();

// Solution:

function concatStringsSolution(stringOne, stringTwo) {
  return `${stringOne} ${stringTwo}`;
}
