# generalAssemblyProjects

# Project 1

## Technologies used:

* HTML
* CSS
* JQuery

## API used:
* superheroapi.com


## Premise:

The premise of the website is to allow the user to choose two superhero characters from the random choices generated through the superhero api, and then pair those two characters up to battle against each other.

## Aproach:

I approached this project by first creating the HTML and CSS layout for the page, and then added game logic in through jQuery after the HTML/CSS was completed.

## Some issues I ran into: 

* The api doesn't have pictures for some of the characters, so I ran into some issues trying to handle that. I decided to just put a default picture for the characters that don't have pictures, but I want to use a function that checks if the character chosen from the api meets certain parameters and then skip over and choose a different one if it doesnt.
* The api has 'null' for some of the character stats, and so I had to write some conditional statements to handle that.
