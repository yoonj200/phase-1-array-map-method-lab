const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

//takes no arguments
//returns an array with title case tutorial names
/*
const titleCased = () => {

  return tutorials
}
*/
/*
function titleCased() {
  return tutorials.map(tutorial => {
    const sentence = tutorial.split(` `).map(word => word[0].toUpperCase() + word.slice(1))
    return sentence
  })
}
*/
const titleCased = () => {
  return tutorials.map ((title) => {
    return title.split(` `).map((word) => {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(` `);
  })
}