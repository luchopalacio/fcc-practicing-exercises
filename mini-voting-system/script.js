const poll = new Map();

function addOption(option) {
  const cleanOption = option.trim();

  if (cleanOption === "") {
    return "Option cannot be empty.";
  }

  if (!poll.has(cleanOption)) {
    poll.set(cleanOption, new Set());
    return `Option "${cleanOption}" added to the poll.`;
  }

  return `Option "${cleanOption}" already exists.`;
}

function vote(option, voterId) {
  const cleanOption = option.trim();

  if (!poll.has(cleanOption)) {
    return `Option "${cleanOption}" does not exist.`;
  }

  const votersSet = poll.get(cleanOption);

  if (votersSet.has(voterId)) {
    return `Voter ${voterId} has already voted for "${cleanOption}".`;
  }

  votersSet.add(voterId);
  return `Voter ${voterId} voted for "${cleanOption}".`;
}

function displayResults(){
  let result = "Poll Results:";

  poll.forEach (function(value, key) {
    result += '\n' + key + ': ' + value.size + ' votes';
  })
  return result;
}

console.log(addOption("Turkey"));
console.log(addOption("Morocco"));
console.log(addOption("Japan"));

console.log(vote("Turkey", 1));
console.log(vote("Turkey", 2));
console.log(vote("Morocco", 3));

console.log(displayResults());