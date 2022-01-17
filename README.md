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