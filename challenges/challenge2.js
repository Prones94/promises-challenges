/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 *
 * 1. Read over the code that follows. What will be printed to the console when
 *    it runs? Run the code using `node challenge2.js` and verify that your
 *    expectation was correct.
 * This will print the "Hello there, ____" from the greet function and then the all uppercase
 * saying that make school is awesome string
 *
 * 2. What happens if greet() fails? Make it fail by changing 'name' to a number
 *    instead of a string. What happens? Does uppercaser() still run?
 * If greet fails then the code will automatically print the rejection message of 'Received an
 * error!'. No, the uppercase function will not run, but instead say the "Name must be a string!"
 *
 * 3. What happens if greet() succeeds and uppercaser() fails? Modify your code
 *    to achieve this result by changing the values of 'name' and 'my_str' and
 *    run the code again.
 * I was able to successfully run the greet function but not the uppercase function by letting name
 * be a string while the my_str be a number. This will allow the greet function to run but I will
 * receive an error message for the uppercase function
 *
 * 4. Write a method that takes a string as input and returns the input string
 *    with a space added between each character. E.g. 'foo' -> 'f o o'
 *
 *    Name this method spacer(str). It should run asynchronously, so use a
 *    setTimeout() and return a Promise.
 *
 *    Last, call spacer() after you call greeter() and uppercaser().
 *
 *    Make sure you only have one catch() block. If you have more than one,
 *    refactor your code so that you only have one.
 *
 *******************************************************************************
 */

 /**
  * Asynchronously returns a greeting for a specified name.
  * @param name The name of the person to greet.
  */
function greet(name) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        if (typeof name === 'string') {
          resolve('Hello there, ' + name);
        } else {
          reject('Name must be a string!');
        }
      }, 1000);
    });
}

/**
 * Returns the uppercased version of a string.
 * @param {*} str The string to uppercase.
 */
function uppercaser(str) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
        if (typeof str === 'string') {
            resolve(str.toUpperCase());
        } else {
            reject('Argument to uppercaser must be string');
        }
        }, 1500);
    });
}

function spacer(str){
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        if(typeof str === 'string'){
          resolve(str.split('').join(' '))
        } else {
          resolve('Argument must be a string')
        }
      }, 1000)
    })
}

name = 'Ducky'
// my_str = 'Make School is Awesome!!!'
my_str = 'Make school is awesome!'

greet(name)
    .then((greetResult) => {
        console.log(greetResult)
        return uppercaser(my_str);
    })
    .then((uppercaserResult) => {
        console.log(uppercaserResult)
        return spacer(my_str);
    }).then((spacerResult) => {
      console.log(spacerResult)
    }).catch((err) => {
        console.log('Received an error!')
        console.log(err);
    });


