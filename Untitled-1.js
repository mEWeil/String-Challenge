// -- String Challenge --//
/* 
Have the function stringChallenge(str) take the str parameter being passed and return the string true if there is an equal number of x's and o's. Other wise return the string false. Only these two letters will be entered in the string, no puntuation or numbers. For example: if str is "xooxxxxooxo" then the ouptput should return "false" because there are 6 x's and 5 o's.
*/
function stringChallenge (str) {
 let xCount = 0;
 let yCount = 0;
 for (i=0; i<str.length; i++){
  if (str[i] ==`x`){xCount++}
  else if (str[i] == `y`){yCount++}
 }
 if (xCount == yCount){return `true`}
 else{return `false`}
}
console.log(stringChallenge(`xooxxxxooxo`))