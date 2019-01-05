// INSTRUCTIONS:
//
// Look a lines 9 to 17. There is a function called getStringLength.
// Your job is to complete the body of this function so that it returns
// the length of the string provided as an argument.

// Many times in programming you will not remember the exact syntax or
// name of the what you need to use to solve a problem. Here, try
// Googling "find length of string in JavaScript" and see what you find!

// Only change code below this line

function getStringLength(str) {
  // Add code here
}

// Only change code above this line

// Code to test your function:
function testFunction() {
  const TEST_CASES = [
    { input: "a", expected: 1 },
    { input: "apples", expected: 6 },
    { input: "blah blah blah", expected: 14 }
  ];

  let passed = true;

  TEST_CASES.forEach(testCase => {
    const { input, expected } = testCase;
    const result = getStringLength(input);
    if (result !== expected) {
      passed = false;
      console.error(`Test FAILED for input: ${input}`);
      console.error(`- recevied: ${result}, expected: ${expected}\n`);
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
