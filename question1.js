function sortByStrings(s, t) {
  let frequencyCount = getFrequencyCount(s)
  let sorted = '';

  for (let char of t) {
    if (frequencyCount[char]) {
      sorted += char.repeat(frequencyCount[char])
    }
  }

  return sorted;
}

function getFrequencyCount(s) {
  let frequencyCount = {};

  for (let char of s) {
    frequencyCount[char] ? frequencyCount[char]++ : frequencyCount[char] = 1;
  }

  return frequencyCount;
}
