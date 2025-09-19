"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let originalExpression = "2+3*2-4*6";
printOut(originalExpression);
const part1ans = 2+3*(2-4)*6  
printOut(+part1ans); 
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let meters = 25*1000;
let centimeters = 34*10;
let totalMM = meters + centimeters;
let inches = totalMM / 25.4;
printOut("25 meters and 34 centimeters in inches = " + inches.toFixed(2));
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let daysInMinutes = 3*24*60;
let hoursInMinutes = 12*60;
let Minutes = 14;
let secondsInMinutes = 45/60;
let totalMinutesPart3 = daysInMinutes + hoursInMinutes + Minutes + secondsInMinutes;
printOut("3 days, 12 hours, 14 minutes and 45 seconds in minutes = " + totalMinutesPart3.toFixed(2));
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let totalMinutes = 6322.52;
let days = Math.floor(totalMinutes / 1440);
let remainingMinutes = totalMinutes % 1440;
let hours = Math.floor(remainingMinutes / 60);
remainingMinutes = remainingMinutes % 60;
let minutes = Math.floor(remainingMinutes);
let seconds = Math.round((remainingMinutes - minutes) * 60);
printOut(totalMinutes + " minutes = " 
    + days + " days, " 
    + hours + " hours, " 
    + minutes + " minutes, " 
    + seconds + " seconds");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let nok = 76;
let usd = 8.6;
let usdToNokRate = nok / usd; // 1 USD in NOK
let nokToUsdRate = usd / nok; // 1 NOK in USD
let dollars = 54;
let usdToNok = Math.round(dollars * usdToNokRate);
let kroner = 54;
let nokToUsd = Math.round(kroner * nokToUsdRate);
printOut("54 USD = " + usdToNok + " NOK");
printOut("54 NOK = " + nokToUsd + " USD");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let quote = "There is much between heaven and earth that we do not understand.";
printOut("Number of characters: " + quote.length);
printOut("Character at position 19: " + quote.charAt(19));
printOut("Substring (pos 35, length 8): " + quote.substr(35, 8));
printOut("Index of 'earth': " + quote.indexOf("earth"));
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Is 5 greater than 3? " + (5 > 3));
printOut("Is 7 >= 7? " + (7 >= 7));
printOut("Is 'a' > 'b'? " + ("a" > "b"));
printOut("Is '1' < 'a'? " + ("1" < "a"));
printOut("Is '2500' < 'abcd'? " + ("2500" < "abcd"));
printOut("Is 'arne' != 'thomas'? " + ("arne" != "thomas"));
printOut("Is 2 == 5? " + (2 == 5));
let compareResult = "abcd" > "bcd";
printOut("Is ('abcd' > 'bcd') false? " + (!compareResult));
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let num1 = Number("254");
printOut('"254" -> ' + num1);

let num2 = parseFloat("57.23");
printOut('"57.23" -> ' + num2);

let num3 = parseInt("25 kroner");
printOut('"25 kroner" -> ' + num3);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let r = Math.floor(Math.random() * 360) + 1;
printOut("Random number (1–360): " + r);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let totalDays = 131;
let weeks = Math.floor(totalDays / 7);
let dayspart10 = totalDays % 7;

printOut(totalDays + " days = " + weeks + " weeks and " + days + " days");
printOut(newLine);