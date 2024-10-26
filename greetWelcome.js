//https://www.codewars.com/kata/577ff15ad648a14b780000e7/train/javascript
function greet(language){
    const greetings = {
        english: "Welcome",
        czech: "Vitejte",
        danish: "Velkomst",
        dutch: "Welkom",
        estonian: "Tere tulemast",
        finnish: "Tervetuloa",
        flemish: "Welgekomen",
        french: "Bienvenue",
        german: "Willkommen",
        irish: "Failte",
        italian: "Benvenuto",
        latvian: "Gaidits",
        lithuanian: "Laukiamas",
        polish: "Witamy",
        spanish: "Bienvenido",
        swedish: "Valkommen",
        welsh: "Croeso"
      };
    
      // Return the greeting if language exists in database, otherwise default to English
      return greetings[language] || greetings.english;
}   

console.log(greet("english"));
console.log(greet("spanish"));
console.log(greet("russian"));
console.log(greet("ind"))