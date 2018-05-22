// -- -Directions
// Given a string, return a new string with the reversed order of characters ---
// Examples   reverse('apple') === 'leppa'   reverse('hello') === 'olleh'
// reverse('Greetings!') === '!sgniteerG'

/* solution #1 */
function reverse(str){
    const arr = str.split('');
    arr.reverse();
    return arr.join('');

    //concise code for above soultion #1
    /* function reverse(str){
        return str
        .split('')
        //helper method
        .reverse()
        .join('');
    } */

}

module.exports= reverse;
