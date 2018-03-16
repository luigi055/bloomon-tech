# Bloomon Production Facility Challenge

## Intall the repo
```
$git clone https://github.com/luigi055/bloomon-tech/
$cd bloomon-tech
$ npm install
```

How does this work?
```
$node index.js produce --add '<the format rules>'
```

In the repo find a valid format rules to introduce to the app.
[format rules](https://github.com/luigi055/bloomon-tech/blob/develop/text-input.txt)


## what left in the app
Bloomon facility production is a very simple CLI app that receive a string with bouquets rules and a lot of flowers of different species and sizes and should return bouquets which there were enough flowers in storage to create each one. 

in this short and intensive 4 hours of full coding. i've tried to achieve expected result and i think i do. but there were some considerations that left. for example there is not a way to validate if the input value is a invalid string. so in this case i would create a condition that detect if the input value is incorrect and stop the entire program and return a message notifying the error. of course this app was built in a little short of time. what helped me a lot to get a nice result and save time was working based on test driven development and that's why i can rely on the result i expected but of course maybe there are some bugs since i wrote the app fast just thinking the enough to do it. another think i would fix is the final output. i would prefer to show all the passed rules with a success message and not show a simple array with no useful information. i also have some questions in the final output since i don't know why the final total flowers of the Bouquet Spec should return with more flowers than the previous one in the input. 

## Tools
i used was yargs for create a quick and simple CLI app enviroment. the rest was made using vanilla Javascript and Node.js.
for testing i used Mocha and Chai.
