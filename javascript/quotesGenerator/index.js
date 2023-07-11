let quotesArray=[
   '“Things aren’t always #000000 and #FFFFFF” -HTML Proverb',
'“Great web design without functionality is like a sports car with no engine.”– Paul Cookson',
'“Measuring programming progress by lines of code is like measuring aircraft building progress by weight.”– Bill Gates',
   '“A website without SEO is like a car with no gas.”– Paul Cookson',
   '“Algorithm: Word used by programmers when they don’t want to explain what they did.”',
   '“Software and cathedrals are much the same — first we build them, then we pray.”',
   '“Remember that there is no code faster than no code.”',
   '“One man’s crappy software is another man’s full-time job.”',
   '“Programming made the impossible possible. You can have a null object and a constant variable.”',
   '“What did the Java code say to the C code? A: You’ve got no class.”',
   '“Why do Java programmers have to wear glasses? Because they don’t C#.”',
   '“A SQL query goes into a bar, walks up to two tables, and asks, ‘Can I join you?’”',
   '“The best thing about a boolean is even if you are wrong, you are only off by a bit.”',
   '“Real programmers can write assembly code in any language.” by Larry Wall.',
   'Algorithm dot V now codes with Algorithm dot N -nanababy'
]
function randomNumber() { 
         const min= 0 
         const max = quotesArray.length - 1
         return Math.floor(Math.random()* (max - min +1)) 


}

function generateQuote() {
 const quote =document.getElementById('quote')
 quote.innerHTML= quotesArray[randomNumber()]    
}

function reset() {
  const quote =document.getElementById('quote')
  quote.innerHTML =''
}