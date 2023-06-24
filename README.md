# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon


### Links

- Solution URL: https://github.com/dfeeney96/advice-generator/
- Live Site URL: https://dfeeney96.github.io/advice-generator/

## My process

### Built with

- Flexbox
- Mobile-first workflow

### What I learned
I have become more familiar in working with APIs, including using fetch, await & async, promises etc.

async function getAdvice(){
    try{
        let response = await fetch("https://api.adviceslip.com/advice");
        let jsonData = await response.json();
        id = jsonData.slip.id;
        advice = jsonData.slip.advice;
        h1.innerText = `ADVICE ${id}`;
        h2.innerText = `"${advice}"`;
    } catch(err){
        console.log(`ERROR: ${err}`);
    }
}


### Continued development

Going forward, I would like to practice my skills with more complex APIs and learn about axios 


## Author
- Linked In - https://www.linkedin.com/in/danielle-feeney-2050011a5/
- Frontend Mentor - [@dfeeney96]https://www.frontendmentor.io/profile/dfeeney96
- GitHub - https://github.com/dfeeney96
