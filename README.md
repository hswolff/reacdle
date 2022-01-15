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