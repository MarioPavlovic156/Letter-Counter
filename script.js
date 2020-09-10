
/*      VARIABLES       */

const input = document.querySelector('input');
let currentNumber = document.getElementById('count_number').innerHTML;

/************************/

/*      FUNCTION FOR UPDATING LETTER COUNT        */

function count(e) {
    /* Check to see if the pressed button is not backspace button */
    if(e.key !== "Backspace") {
        // Incrament the number.
        currentNumber++;
        // Update the Webpage and currentNumber variable.
        document.getElementById("count_number").innerHTML = currentNumber;

    /* Check to see if currentNumber is zero */
    } else if(currentNumber === 0) {
        return; // If the number is 0, stop the function from running.

    /* Check to see if we pressed the backspace button */  
    } else if(e.key === "Backspace") {
        // Subtract the number.
        currentNumber--;
        // Update the Webpage and currentNumber variable.
        document.getElementById("count_number").innerHTML = currentNumber;
    }
}

/***************************************************/

/*      EVENT LISTENERS     */

input.addEventListener('keydown', count);

/****************************/