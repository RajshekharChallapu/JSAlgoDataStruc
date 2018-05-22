// -- -Directions
// Given a string, return a new string with the reversed order of characters ---
// Examples   reverse('apple') === 'leppa'   reverse('hello') === 'olleh'
// reverse('Greetings!') === '!sgniteerG'

/* solution # 3*/
function reverse(str){
  let reversed = '';
  for (let character of str){
    reversed = character + reversed;
    debugger;
  }
     return reversed;
    }
    //we need to call manually..otherwise above functiuon invokes nothing, whenever run debug
    reverse('asdf');
module.exports= reverse;
