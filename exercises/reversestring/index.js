// -- -Directions
// Given a string, return a new string with the reversed order of characters ---
// Examples   reverse('apple') === 'leppa'   reverse('hello') === 'olleh'
// reverse('Greetings!') === '!sgniteerG'

/* solution # 3*/
function reverse(str){
    debugger;

  
    return str.split('').reduce((reversed, character) => 
      character + reversed,'');

    }
    reverse('asdf');
module.exports= reverse;
