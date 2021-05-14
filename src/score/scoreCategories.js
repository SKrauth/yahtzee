const sortDice = roll => {
  let temp = new Array(...roll);
  return temp.sort((a, b) => a - b);
};

const sumDice = roll => {
  return roll.reduce((a, b) => a + b);
};

const sumOfType = val => roll => roll.filter(num => num === val).length * val;

const threeOfAKind = roll => {
  let score = 0;
  let orderedDice = sortDice(roll);
  [0, 1, 2].forEach(i => {
    if (
      orderedDice[i] === orderedDice[i + 1] &&
      orderedDice[i] === orderedDice[i + 2]
    ) {
      score = sumDice(orderedDice);
    }
  });
  return score;
};

const fourOfAKind = roll => {
  let score = 0;
  let orderedDice = sortDice(roll);
  [0, 1].forEach(i => {
    if (
      orderedDice[i] === orderedDice[i + 1] &&
      orderedDice[i] === orderedDice[i + 2] &&
      orderedDice[i] === orderedDice[i + 3]
    ) {
      score = sumDice(orderedDice);
    }
  });
  return score;
};

const fullHouse = roll => {
  let score = 0;
  let orderedDice = sortDice(roll);
  if (
    orderedDice[0] === orderedDice[1] &&
    orderedDice[3] === orderedDice[4] &&
    orderedDice[0] !== orderedDice[4]
  ) {
    if (
      orderedDice[0] === orderedDice[2] ||
      orderedDice[2] === orderedDice[3]
    ) {
      score = 25;
    }
  }
  return score;
};

const smallStraight = roll => {
  let score = 0;
  let orderedDice = sortDice(roll);

  if (
    orderedDice[0] + 1 === orderedDice[1] &&
    orderedDice[0] + 2 === orderedDice[2] &&
    orderedDice[0] + 3 === orderedDice[3]
  ) {
    score = 30;
  } else if (
    orderedDice[1] + 1 === orderedDice[2] &&
    orderedDice[1] + 2 === orderedDice[3] &&
    orderedDice[1] + 3 === orderedDice[4]
  ) {
    score = 30;
  } else if (
    orderedDice[0] + 1 === orderedDice[1] &&
    orderedDice[0] + 2 === orderedDice[3] &&
    orderedDice[0] + 3 === orderedDice[4]
  ) {
    score = 30;
  } else if (
    orderedDice[0] + 1 === orderedDice[1] &&
    orderedDice[0] + 2 === orderedDice[2] &&
    orderedDice[0] + 3 === orderedDice[4]
  ) {
    score = 30;
  }
  return score;
};

const largeStraight = roll => {
  let score = 0;
  let orderedDice = sortDice(roll);

  if (
    orderedDice[0] + 1 === orderedDice[1] &&
    orderedDice[0] + 2 === orderedDice[2] &&
    orderedDice[0] + 3 === orderedDice[3] &&
    orderedDice[0] + 4 === orderedDice[4]
  ) {
    score = 40;
  }

  return score;
};

const yahtzee = roll => {
  let score = 0;
  let orderedDice = sortDice(roll);

  if (
    orderedDice[0] === orderedDice[1] &&
    orderedDice[0] === orderedDice[2] &&
    orderedDice[0] === orderedDice[3] &&
    orderedDice[0] === orderedDice[4]
  ) {
    score = 50;
  }

  return score;
};

const chance = roll => {
  return sumDice(roll);
};

const scoreCategories = {
  sumOfType,
  threeOfAKind,
  fourOfAKind,
  fullHouse,
  smallStraight,
  largeStraight,
  yahtzee,
  chance
};

export default scoreCategories;
