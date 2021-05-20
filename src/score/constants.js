import scoreCategories from './scoreCategories'

const genId = () => {
  return Math.floor(Math.random() * 899999) + 100000;
};

const upperSection = [
  {
    id: genId(),
    category: "Aces",
    description: "The sum of dice with the number 1",
    calc: scoreCategories.sumOfType(1)
  },
  {
    id: genId(),
    category: "Twos",
    description: "The sum of dice with the number 2",
    calc: scoreCategories.sumOfType(2)
  },
  {
    id: genId(),
    category: "Threes",
    description: "The sum of dice with the number 3",
    calc: scoreCategories.sumOfType(3)
  },
  {
    id: genId(),
    category: "Fours",
    description: "The sum of dice with the number 4",
    calc: scoreCategories.sumOfType(4)
  },
  {
    id: genId(),
    category: "Fives",
    description: "The sum of dice with the number 5",
    calc: scoreCategories.sumOfType(5)
  },
  {
    id: genId(),
    category: "Sixes",
    description: "The sum of dice with the number 6",
    calc: scoreCategories.sumOfType(6)
  },
  {
    id: genId(),
    category: "Section Bonus",
    description: "Total of 63 or more points in these six boxes",
    calc: scoreCategories.upperBonus,
    bonus: true
  }
];

const lowerSection = [
  {
    id: genId(),
    category: "Three Of A Kind",
    description: "At least three dice the same",
    calc: scoreCategories.threeOfAKind
  },
  {
    id: genId(),
    category: "Four Of A Kind",
    description: "At least four dice the same",
    calc: scoreCategories.fourOfAKind
  },
  {
    id: genId(),
    category: "Full House",
    description: "Three of one number and two of another",
    calc: scoreCategories.fullHouse
  },
  {
    id: genId(),
    category: "Small Straight",
    description: "Four sequential dice",
    calc: scoreCategories.smallStraight
  },
  {
    id: genId(),
    category: "Large Straight",
    description: "Five sequential dice",
    calc: scoreCategories.largeStraight
  },
  {
    id: genId(),
    category: "Yahtzee",
    description: "All five dice the same",
    calc: scoreCategories.yahtzee
  },
  {
    id: genId(),
    category: "Chance",
    description: "Any combination",
    calc: scoreCategories.chance
  }
];

let constants = { upperSection, lowerSection }

export default constants;
