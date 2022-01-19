# reacdle

a [wordle](https://www.powerlanguage.co.uk/wordle/) clone written in React, Tailwind, and with tests!


# steps taken to create

- make the readme
- `yarn create vite reacdle --template react-ts .`
- [add tailwind](https://tailwindcss.com/docs/guides/vite)
- did some googling and seems adding Jest to Vite isn't easy
- so let's use [vitest](https://vitest.dev/)
- let's start by getting our core algorithm working
    - [found a 5 letter word list to use](https://www.thefreedictionary.com/5-letter-words.htm)
        - hehe `copy(Array.from(document.querySelectorAll('.TCont li a')).map(a => a.innerText))`
- meh, i want to do UI first, lets switch to making the basic word guess building block
- start making WordRow
     - realize I need to finally learn [css grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout)
     - got initial basic design and then realized i needed to go back to making the core algorithm work
- ok get `computeGuess()` working
- realizied i forgot some edge cases of `computerGuess` and had to fix them
- update props of WordRow and clean up styles somewhat
- let's get our store working! adding zustand and getting the UI to work accordingly
    - at this point i wanted to get letter input working...so i just kept coding and coding
    - got the raw behavior working...but let's stop for now
- want to add validation to game (only allow 6 guesses) but think it may be easier to do this with UI tests
    - so go to [vitest examples](https://vitest.dev/guide/#examples) which leads to [their react-testing-library example](https://github.com/vitest-dev/vitest/tree/main/examples/react-testing-lib) and then cross test that it's [the same as react testing libraries setup guide](https://testing-library.com/docs/react-testing-library/setup)
    - just went down a huge rabit hole getting RTL working with vitest only to find that jest-dom TypeScript support is broken
- more tests! getting more game functionality together
- spend way too long to get empty state of the game to have correct default height
- get things deployable for fun and profit
- Refactor store to save computed guesses into store so we can calculate game state more easily
- this took far too much time than it should have
    - i wanted to move from input box to global keyDown listener
    - i ran into the issue where a function handler closes over a value so the `guess` `useState` value was stale and never changed
    - it took me far too long to think about how to deconstruct the problem and make it simpler
    - happy with the end result but man...i wish it didn't take so long
- some minor refactoring to get isValidWord working. had to move state around
- add the keyboard for mobile use!


# other implementations

- https://octokatherine.github.io/word-master/
- https://github.com/rauchg/wordledge