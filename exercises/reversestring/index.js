// -- -Directions
// Given a string, return a new string with the reversed order of characters ---
// Examples   reverse('apple') === 'leppa'   reverse('hello') === 'olleh'
// reverse('Greetings!') === '!sgniteerG'

/* solution # 2*/
function reverse(str){
    //ES2015
    let reversed='';
    for (let character of str){
        reversed = character + reversed;
    }
    return reversed;
}
module.exports= reverse;
