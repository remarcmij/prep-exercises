'use strict';

function throwDie() {
  return Math.floor(Math.random() * 6) + 1;
}

function runExperiment(sampleSize) {
  const valueCounts = [0, 0, 0, 0, 0, 0];

  for (let i = 0; i < sampleSize; i++) {
    const value = throwDie();
    valueCounts[value - 1] += 1;
  }

  const results = [];
  for (const valueCount of valueCounts) {
    const percentage = (valueCount / sampleSize) * 100;
    results.push(percentage.toFixed(2));
  }

  return results;
}

function main() {
  const sampleSizes = [100, 1000, 1000000];
  for (const sampleSize of sampleSizes) {
    const results = runExperiment(sampleSize);
    console.log(results, sampleSize);
  }
}

main();
