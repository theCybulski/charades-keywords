import { keywords } from './charades-keywords';
import { getRandomItems } from "./utils";

const mainExport = {
  all: keywords,
  random: (qty, config) => {
    if (config && config.complexity && config.category === undefined) {
      const filteredByComplexity = keywords.filter(keyword => keyword.complexity === config.complexity);
      return getRandomItems(qty, filteredByComplexity);
    }

    if (config && config.category && config.complexity === undefined) {
      const filteredByCategory = keywords.filter(keyword => keyword.category === config.category);
      return getRandomItems(qty, filteredByCategory);
    }

    if (config && config.category && config.complexity) {
      const filteredByComplexityAndCategory = keywords.filter(keyword => (
        keyword.category === config.category && keyword.complexity === config.complexity
      ));
      return getRandomItems(qty, filteredByComplexityAndCategory);
    }

    return getRandomItems(qty, keywords);
  }
};

export default mainExport;
