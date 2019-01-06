// INSTRUCTIONS:
//
// Below is a function called returnLongestStringSize.
// Your job is to complete the body of this function so that it returns
// the length of the longest string, out of two arguments.

// For instance, returnLongestStringSize("a", "abc") should return 3
// because "abc" is 3 letters long and longer than "a".

// There are a few ways to do this. You will probably need to define a variable
// or two, and use some conditional logic. Here are some resources to help:

// Defining variables:
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
// If..else logic:
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
// By the way, you can COMMAND+click the link in the comment to open it!

// Only change code below this line

function returnLongestStringSize(stringOne, stringTwo) {
  // Add code here
}

// Only change code above this line

// Code to test your function:
function testFunction() {
  const TEST_CASES = [
    { input: ["a", "abc"], expected: 3 },
    { input: ["apples", "blah"], expected: 6 },
    { input: ["blah blah blah", "bananas apples oranges"], expected: 22 }
  ];

  let passed = true;

  TEST_CASES.forEach(testCase => {
    const { input, expected } = testCase;
    const result = returnLongestStringSize(...input);
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
