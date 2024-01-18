# password-generator
Random password generator program

## Description
As an employee with sensitive data I want to make generate secure passwords. In order to do this, I created a random password generator that allows me to generate long randomized passwords. . 

## Problem
I need to create a random password, choose the length, and pick what kind of characters are used. 

## Solution
I wrote a program in Javascript that gave me a prompt of how long I want the pass word, if i wanted special characters, lowercase characters, uppercase characters, and/or numbers. Using that information, my program then generated a random password meeting that criteria. This was done by using adding the selected characters to the string, choosing a random position on the string using math.random and charat, and then adding it until the lenth required. 

Link to deployed application: https://nguyenaileen.github.io/password-generator/
[Screenshot of deployed application](Assets/Deployed-password-generator-screenshot.png)

## Credits
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
https://www.geeksforgeeks.org/how-to-generate-a-random-password-using-javascript/

Keegan Royal-Eisenberg and George Schultz helped me get started!