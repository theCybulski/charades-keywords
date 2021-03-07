export const getRandomItems = (qty, array) => {
  if (qty) {
    const randomItems = [];

    if (qty > array.length) {
      return array
    }

    while (randomItems.length < qty) {
      const randomItem = array[Math.floor(Math.random() * array.length)];

      // istanbul ignore next
      if (!randomItems.includes(randomItem)) {
        randomItems.push(randomItem);
      }
    }
    return randomItems;
  } else {
    return [array[Math.floor(Math.random() * array.length)]]
  }
};
