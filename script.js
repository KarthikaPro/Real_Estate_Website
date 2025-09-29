console.log('get started..')

var a = 'hello';
console.log(a);

//looping through strings

//transforming string of words to letters eg:hello to h ,e,l,l,o 

// Method1--------best method
var letters = [];
for(let i= 0;i<a.length;i++) {
    letters.push(a[i]);
}
console.log(letters.join(" "));

// ------simple looping--------
for(let i= 0;i<a.length;i++) {
   console.log(a[i]);
}
// Time Complexity: O(n) — iterates once through the string.
// Space Complexity: O(1) — only i is stored.
// ------------simple looping ends here----------


// Method 2
var b=[...a].join(' ');
 console.log(typeof(b));

// Time Complexity: O(n) — spreads the string and then joins.
// Space Complexity: O(n) — creates a new array and a new string.



// 1.Print each character of a string on a new line.

let text = 'world';
separateText = [];
for(i=0;i<text.length;i++) {
    separateText.push(i+" "+text[i]);
}
textToletters=separateText.join('\n');
let findText=text.includes('r');
if(findText) {
    console.log(text.indexOf('r'));
}
console.log('/');
console.log(textToletters[8]);