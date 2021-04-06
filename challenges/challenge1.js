/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 *
 * 1. Read over the code that follows. In what order will the outputs "Step 1",
 *    "Step 2", and "Step 3" be printed? How do you know?
 * Step 1, Step 3, then Step 2. Since Step 2 has a set timeout function attached to it,
 * step two will run 2 seconds after both console.log has already printed out Step 1 and 3
 *
 * 2. Run this code using `node challenge1.js`. In what order were the steps
 *    printed?
 *Step 1, Step 3, and Step 2
 *
 * 3. Change the delay time in the `snooze` function from 2000 ms to 0. In what
 *    order will the steps be printed now? Why? Re-run the code again to verify
 *    your expectation. Were you correct?
 *Since Step 2 is still within the setTimeout function, it will still run after the two immediate
 console logs. I was correct in my assumptions
 *******************************************************************************
 */

/* This function takes a callback as a parameter. */
function snooze(action) {
    setTimeout(function() {
      action();
    }, 0);
}
console.log('Step 1');

snooze( function() {
    console.log('Step 2');
    console.log("Async Action completed via callback");
} );

console.log('Step 3');

