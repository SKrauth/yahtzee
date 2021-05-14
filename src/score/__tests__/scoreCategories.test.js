import scoreCategories from '../scoreCategories';

describe("Sum of Type", () => {
  test("", () => {

  })
})

describe("Three of a Kind", () => {
  test("", () => {

  })
})

describe("Four of a Kind", () => {
  test("", () => {

  })
})

describe("Full House", () => {
  test("should return 25 for any valid triple and double", () => {
    const highTrip = [2,2,4,4,4];
    const lowTrip = [6,6,3,3,3];
    const score = 25;

    expect(scoreCategories.fullHouse(highTrip)).toEqual(score)
    expect(scoreCategories.fullHouse(lowTrip)).toEqual(score)
  })

  test("should not consider Yahtzee to be a valid Full House", ()=> {
    const yahtzee = [2,2,2,2,2];
    const score = 0;

    expect(scoreCategories.fullHouse(yahtzee)).toEqual(score)
  })
})


describe("Small Straight", () => {
  test("should recognize straights regardless of fifth dice value", () => {
    const startNum = [2,2,3,4,5];
    const middleNum = [1,2,3,3,4];
    const endNum = [2,3,4,5,5];
    const largeStraight = [2,3,4,5,6];
    const score = 30;

    expect(scoreCategories.smallStraight(startNum)).toEqual(score);
    expect(scoreCategories.smallStraight(middleNum)).toEqual(score);
    expect(scoreCategories.smallStraight(endNum)).toEqual(score);
    expect(scoreCategories.smallStraight(largeStraight)).toEqual(score);
  })

  test("should return 0 for non-straights", () => {
    const noStraight = [1,1,2,2,4];
    const gapStraight = [1,2,4,5,6];
    const score = 0;

    expect(scoreCategories.smallStraight(noStraight)).toEqual(score)
    expect(scoreCategories.smallStraight(gapStraight)).toEqual(score)
  })
})

describe("Large Straight", () => {
  test("should return 40 points for both valid straights", () => {
    const lowStraight = [1,2,3,4,5];
    const highStraight = [2,3,4,5,6];
    const score = 40;

    expect(scoreCategories.largeStraight(lowStraight)).toEqual(score)
    expect(scoreCategories.largeStraight(highStraight)).toEqual(score)
  })

  test("should return 0 for non-straights", () => {
    const noStraight = [1,1,2,2,4];
    const gapStraight = [1,2,4,5,6];
    const score = 0;

    expect(scoreCategories.largeStraight(noStraight)).toEqual(score)
    expect(scoreCategories.largeStraight(gapStraight)).toEqual(score)
  })
})

describe("Yahtzee", () => {
  test("", () => {

  })
})

describe("Chance", () => {
  test("", () => {

  })
})
