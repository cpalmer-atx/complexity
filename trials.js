exports.trials = (trial, trialCount, data) => {
  const results = [];

  for (let i = 0; i < trialCount; i++) {
    results.push(trial(data));
  }

  const sum = results.reduce( (acc, curr) => acc + curr );
  return (sum / trialCount);
}