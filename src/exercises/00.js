// INSTRUCTIONS:
//
// Look a lines 9 to 17. There is a function called multiplyByTen.
// Your job is to complete the body of this function so that it returns
// the num argument multipled by the number 10.

// Only change code below this line

function multiplyByTen(num) {
  // Add code here
}

// Only change code above this line

// Code to test your function:
function testFunction() {
  const TEST_CASES = [
    { input: 5, expected: 5 * 10 },
    { input: 100, expected: 100 * 10 },
    { input: 500, expected: 500 * 10 }
  ];

  let passed = true;

  TEST_CASES.forEach(testCase => {
    const { input, expected } = testCase;
    const result = multiplyByTen(input);
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

function multiplyByTenSolution(num) {
  return num * 10;
}
