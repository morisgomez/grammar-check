let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(" ");
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

//console.log(storyWords);

let count = 0; //global scope
storyWords.forEach(word => {count++}); //callback function increments count by 1.
console.log(count); //prints total elements in storyWords array. //181

//filtering out "literally":
storyWords = storyWords.filter(word => {
  return word != unnecessaryWord
});

//removing misspelled words:
storyWords = storyWords.map(word => {
  if (word === misspelledWord)
  {
    return "beautiful";
  }
  else
  {
    return word;
  }
});

//finding bad word:
let badWordIndex = storyWords.findIndex(word => {
  return word === badWord; //index 78
});

//replacing bad word:
storyWords[badWordIndex] = "really";

//check for elements being 10 or less char:
let lengthCheck = storyWords.every(word => {
  return word.length >= 10;
});
console.log(lengthCheck); //t = all char >= 10. f = not all char >= 10

//find word > 10 char:
let wordTen = storyWords.findIndex(word => {
  return word.length > 10; //index 111
});

//replace word > 10 char:
storyWords[wordTen] = "dazzling";

 //console.log(wordTen); //111
 //console.log(storyWords[wordTen]); //breathtaking
 //console.log(storyWords[111]); //breathtaking
 //console.log(badWordIndex); //78

 //below logs the final and edited story:
 console.log(storyWords.join(" "));
 /* Last weekend, I took the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It's really an adventure from beginning to end! It is a 48 mile loop and it took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a really long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a dazzling 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you cross back into New York! At this point, you are very close to the end.
 */
