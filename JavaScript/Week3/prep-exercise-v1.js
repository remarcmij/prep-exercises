'use strict';

function throwDie() {
  // TODO Return a random integer between 1 and 6.
}

function runExperiment(sampleSize) {
  const valueCounts = [0, 0, 0, 0, 0, 0];

  // TODO
  // Write a for loop to call `throwDie()` `sampleSize` times and
  // keep a count of how many times each value (1..6) is thrown in the
  // `valueCounts` array. Use the first element of `valueCounts` for keeping a
  // count how many times the value 1 is thrown, the second element for value 2,
  // etc.

  const results = [];

  // TODO
  // Write a for loop to divide each element of the `valueCounts` array by the
  // `sampleSize` and convert the result of the division to a number string
  // with a precision of three decimals, e.g. '0.123'.
  // Then push that string onto the `results` array.

  return results;
}

function main() {
  const sampleSizes = [100, 1000, 1000000];

  // TODO
  // Write a for loop that calls the `runExperiment()` function for each of the
  // values of the `sampleSize` array.
  // Log the results of each experiment as well as the experiment size to the
  // console.
  // The expected output could look like this:
  //
  // [ '0.130', '0.180', '0.160', '0.140', '0.240', '0.150' ] 100
  // [ '0.174', '0.174', '0.158', '0.167', '0.166', '0.161' ] 1000
  // [ '0.167', '0.167', '0.166', '0.167', '0.166', '0.166' ] 1000000
}

main();
