## csbin.io + humble contributions from me


[csbin.io](https://www.csbin.io) is a browser based JS interpreter powered by [Codesmith](https://www.codesmith.io).

csbin has collections of coding challenges organized by these topics:

- Intro to JavaScript
- Callbacks
- Closures
- Asynchronous JavaScript
- Object-Oriented Programming
- Recursion

I have found there is a lot of mileage in these challenges, even when one is no longer new to the topics.

This repo contains copies of all of the challenges live on csbin (as of 26 March 2022).

Reasons I decided to create this repo:

1. Solutions written in csbin do not persist.

2. To expose people I practice JS with to working in a code-editor
3. Working in a code editor means we can use debuggers etc. – an important tool to learn I'm sure we all agree!
4. Certain features behave a bit strangely in the csbin environment (one example: `const { log } = console;` throws an error)
5. I have begun writing tests for the challenges. This is great practice for me personally, and provides an extra learning angle for others.

All credit goes to codesmith here. All of the challenges (with one or two exceptions) are directly copy/pasted from csbin.

I have edited some of the instructions, usually suggesting to return values rather than logging them.

In some cases, my tests check for corner cases that csbin ignores.

The tests and solution files are the code authored by me. Any suggestions for improvement are welcome!

I plan to use this repo to help others learn, but I do not charge for "lessons" (they're really just pair programming sessions).

Finally, Codesmith and their co-founder, Will Sentance, are among my personal JS heroes. They are perhaps the single biggest reason why I have grown to love JS 😊

On that sentimental note, enjoy :)

### _Update 6 April 2022:_

- This is still a work-in-progress. Sections that are in a presentable state

  - intro (up to challenge 11 'longest word')

  - callbacks

  - closures (tests written for challenges 1-17)

  - OOP
    - object literals

    - Object.create

    - new keyword

    - es6 classes

    - subclassing

  - extensions

    - closures

### _Update 27 March 2022:_

- I couldn't help myself and am coming up with additional challenges that I hope are instructive.
- They will live in the 'extensions' folder – to signal they're not part of the original csbin.

### Instructions to run on your machine

1. Make sure you have a decently recent version of node installed
2. Get the code (clone/fork/download)
3. Run `npm install`

And you're hopefully good to go!
