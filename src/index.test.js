import { expect } from 'chai';
import charadesKeywords from './index';
import { CATEGORIES, COMPLEXITY } from "./charades-keywords";

describe('charades-keywords', () => {
  describe('all', () => {
    it('should be an array of keywords', () => {
      const validateCategory = (category) =>
        Object.keys(CATEGORIES).map(key => CATEGORIES[key]).includes(category);

      const validateComplexity = (complexity) =>
        Object.keys(COMPLEXITY).map(key => COMPLEXITY[key]).includes(complexity);


      const isArrayOfKeywords = (array) => array.every((item) => (
        validateCategory(item.category)
        && validateComplexity(item.complexity)
        && typeof item.word === "string"
      ));

      expect(charadesKeywords.all).to.satisfy(isArrayOfKeywords)
    });
  });
});

describe('random', () => {
  describe('quantity', () => {
    it('should return an array with one item', () => {
      const randomItem = charadesKeywords.random();

      expect(charadesKeywords.all).to.include(randomItem[0]);
    });

    it('should return an array of X random items', () => {
      const randomItems = charadesKeywords.random(3);

      expect(randomItems).to.have.length(3);
      randomItems.forEach((item) => {
        expect(charadesKeywords.all).to.include(item);
      });
    });
  })

  describe('config', () => {
    it('should return an array of random items by category', () => {
      const randomItems = charadesKeywords.random(3, { category: CATEGORIES.ACTIVITY });

      expect(randomItems.length).to.be.greaterThan(0)
      randomItems.forEach((item) => {
        expect(item.category).to.equal(CATEGORIES.ACTIVITY);
      });
    })

    it('should return an array of random items by complexity', () => {
      const randomItems = charadesKeywords.random(3, { complexity: COMPLEXITY.MEDIUM });

      expect(randomItems.length).to.be.greaterThan(0)
      randomItems.forEach((item) => {
        expect(item.complexity).to.equal(COMPLEXITY.MEDIUM);
      });
    })

    it('should return an array of random items by category & complexity', () => {
      const randomItems = charadesKeywords.random(3, { category: CATEGORIES.ACTIVITY, complexity: COMPLEXITY.HARD });

      expect(randomItems.length).to.be.greaterThan(0)
      randomItems.forEach((item) => {
        expect(item.complexity).to.equal(COMPLEXITY.HARD);
        expect(item.category).to.equal(CATEGORIES.ACTIVITY);
      });
    })
  })

  it('should return all possible results if requested quantity is higher than length', () => {
    const moreThanPossible = charadesKeywords.all.length + 1
    const randomItems = charadesKeywords.random(moreThanPossible);

    expect(randomItems.length).to.be.lessThan(charadesKeywords.all.length + 1)
  })
});
