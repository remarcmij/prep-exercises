'use strict';

function throwDie() {
  return Math.floor(Math.random() * 6) + 1;
}

function runExperiment(experimentSize) {
  const valueCounts = [0, 0, 0, 0, 0, 0];

  for (let i = 0; i < experimentSize; i++) {
    const value = throwDie();
    valueCounts[value - 1] += 1;
  }

  const results = [];
  for (const valueCount of valueCounts) {
    results.push((valueCount / experimentSize).toFixed(3));
  }

  return results;
}

function main() {
  const experimentSizes = [100, 1000, 1000000];
  for (const experimentSize of experimentSizes) {
    const results = runExperiment(experimentSize);
    console.log(results, experimentSize);
  }
}

main();
