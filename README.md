# charades-keywords

Find a random keyword for the game of charades! (Polish only)

[![codecov](https://codecov.io/gh/theCybulski/charades-keywords/branch/master/graph/badge.svg?token=UQR6ZPM29W)](https://codecov.io/gh/theCybulski/charades-keywords)
[![Build Status](https://travis-ci.org/theCybulski/charades-keywords.svg?branch=master)](https://travis-ci.org/theCybulski/charades-keywords)

## Install
```
npm install --save charades-keywords
# or
yarn add charades-keywords
```

## Usage
```js
import charadesKeywords from "charades-keywords";

// Returns an array of objects with all available keywords
charadesKeywords.all

// Returns a single random keyword object
charadesKeywords.random()

// Returns 3 random keyword objects
charadesKeywords.random(3)

// Returns 3 random keyword objects with a category of activity
charadesKeywords.random(3, { category: 'activity' })

// Returns 3 random keyword objects with a complexity of hard
charadesKeywords.random(3, { complexity: 'hard' })

// Returns 3 random keyword objects with a complexity of hard and category of activity
charadesKeywords.random(3, { complexity: 'hard', category: 'activity' })
```

## Available categories
- person
- animal
- item
- proverb
- activity
- title
- other

## Available complexities
- easy
- medium
- hard
