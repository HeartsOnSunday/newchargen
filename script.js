
/*global $ */

function generateCharacter() {
  
  var cpuChoice = 99;
  
  var charName = [
    "Allister Thorne", 
    "Arya", 
    "Robert Baratheon", 
    "Branden Stark", 
    "Brienne", 
    "Bronn", 
    "Catelyn Stark",
    "Cersei", 
    "Daario Naharis", 
    "Daenarys", 
    "Davos",
    "Gendry", 
    "Gregor Clegane - Mountain", 
    "Hodor", 
    "Jamie Lannister", 
    "Jaqen H'ghar", 
    "Joffrey", 
    "Jon",
    "Jorah", 
    "Drogo",
    "LittleFinger",
    "Mance Rader", 
    "Margarie", 
    "Doran Martell", 
    "Melissandra", 
    "Missandei",
    "Jeor Mormont", 
    "Ned Stark", 
    "Oberyn Martel", 
    "Olenna", 
    "Osha", 
    "Podrick", 
    "Pycell", 
    "Qyburn", 
    "Ramsay", 
    "Robb Stark", 
    "Roose Bolton", 
    "Ros", 
    "Samwell", 
    "Sandor Clegane - The Hound",
    "Sansa", 
    "Shae", 
    "Stannis",
    "The High Sparrow", 
    "Theon", 
    "Tommen Barathon", 
    "Tormund",
    "Tyrion", 
    "Tywin", 
    "Viserys", 
    "Vrays", 
    "Mirri Maz the Duur Witch", 
    "Ygritt"
    ]; 
  var charTitle = [
    "Acting Lord Commander of the Night's Watch", "Faceless Men", "King of the 7 Kingdoms", "The Three Eyed Raven", "Baratheon/Stark", "Sellsword", "Stark", "Baratheon", "Sellsword", "Mother of Dragons", "Baratheon/Stark", "Baratheon", "Lannister", "Stark", "Lord Commander of the Kingsguard", "Faceless Men", "King of the Seven Kingdoms", "Night's Watch", "Targaryen", "Dothraki khalasar", "Independent", "King Beyond the wall", "Lannister", "Dornish", "Lord of the Light", "Targaryen", "Lord Commander of the Night's Watch", "Hand to the King", "Dornish", "Lady of Highgarden", "Wildling", "Lannister", "Lannister", "Lannister", "Bolton", "King in the North", "Warden of the North", "Prostitute", "Night's Watch", "Lannister/Brotherhood with out Banners", "Lannister/Bolton", "Lannister", "King of the Andalls and the First Men", "High Septon", "Stark", "Lannister", "Wildling", "Hand of the Queen", "Hand of the King", "Advisor to the King", "Lannister/Targaryen", "Gypsy Tribe", "Wildling"];
  var charAllignment = ["Lawful Evil",
  "Chaotic Neutral", "Chaotic Neutral", "True Neutral", "Lawful Good", "Chaotic Neutral", "Lawful Neutral", "Lawful Evil", "Chaotic Good", "Chaotic Neutral", "Neutral Good", "Chaotic Good", "Lawful Evil", "True Neutral", "True Neutral", "Lawful Neutral", "Chaotic Evil", "Lawful Neutral", "Neutral Good", "Chaotic Neutral", "Lawful Evil", "Chaotic Neutral", "Lawful Neutral", "Lawful Neutral", "Lawful Evil ", "Lawful Neutral", "True Neutral", "Lawful Good", "True Neutral", "Lawful Neutral", "Chaotic Neutral", "Lawful Neutral", "Lawful Neutral", "Chaotic Evil", "Chaotic Evil ", "Neutral Good", "Neutral Evil", "Chaotic Neutral", "Chaotic Good", "Chaotic Neutral", "Neutral Good", "Neutral Good", "Chaotic Neutral", "Lawful Evil", "True Neutral", "Lawful Neutral", "Chaotic Neutral", "True Neutral ", "Lawful Evil ", "Lawful Neutral", "Chaotic Neutral", "Chaotic Evil", "Chaotic Neutral"];  
  var charStatus = ["Dead", 
  "Alive", "Dead", "Alive", "Alive", "Alive", "Dead", "Alive", "Alive", "Alive", "Alive", "Alive", "Alive", "Dead", "Alive", "Alive", "Dead", "Undead", "Alive", "Dead", "Dead", "Dead", "Dead", "Dead", "Alive", "Alive", "Dead", "Dead", "Dead", "Dead", "Dead", "Alive", "Alive", "Alive", "Dead", "Dead", "Dead", "Dead", "Alive", "Undead", "Alive", "Dead", "Dead", "Dead", "Alive", "Dead", "Alive", "Alive", "Dead", "Dead", "Alive", "Dead", "Dead"];  
    
  var randomize = Math.floor(Math.random() * charName.length);
  var  character = charName[randomize];
  var title = charTitle[randomize];
  var allignment = charAllignment[randomize];
  var status = charStatus[randomize];
  
  console.log(character);
  console.log(title);
  console.log(allignment);
  console.log(status);
  
  document.getElementById("character").innerHTML = ""+charName[randomize];
  document.getElementById("title").innerHTML = ""+charTitle[randomize];
  document.getElementById("allignment").innerHTML = ""+charAllignment[randomize];
  document.getElementById("status").innerHTML = ""+charStatus[randomize];
  
  
 
  
  
  
    function generateCharaterQuote(character) {
      $.getJSON("https://got-quotes.herokuapp.com/quotes?char=" + character, function(data) {
        console.log(data);
        var characterQuote = data.quote;
        console.log(characterQuote);
        var pQuote = document.createElement("p").html(characterQuote);
        pQuote.appendChild("#quoter");
 //       qGen.quote = quoteData[0].quote;
 //       qGen.title = quoteData[0].character;
 //       document.getElementById("quoteDisp").innerHTML = ('"' + qGen.quote + '"');
//        document.getElementById("authorDisp").innerHTML = '- ' + qGen.title;
      });
    }
  
  
  
  
  
  
}

function generateCharacterR() {
  
  var cpuChoice = 99;
  
  var charName = [
    "Allister Thorne", 
    "Arya", 
    "Robert Baratheon", 
    "Branden Stark", 
    "Brienne", 
    "Bronn", 
    "Catelyn Stark",
    "Cersei", 
    "Daario Naharis", 
    "Daenarys", 
    "Davos",
    "Gendry", 
    "Gregor Clegane - Mountain", 
    "Hodor", 
    "Jamie Lannister", 
    "Jaqen H'ghar", 
    "Joffrey", 
    "Jon",
    "Jorah", 
    "Drogo",
    "LittleFinger",
    "Mance Rader", 
    "Margarie", 
    "Doran Martell", 
    "Melissandra", 
    "Missandei",
    "Jeor Mormont", 
    "Ned Stark", 
    "Oberyn Martel", 
    "Olenna", 
    "Osha", 
    "Podrick", 
    "Pycell", 
    "Qyburn", 
    "Ramsay", 
    "Robb Stark", 
    "Roose Bolton", 
    "Ros", 
    "Samwell", 
    "Sandor Clegane - The Hound",
    "Sansa", 
    "Shae", 
    "Stannis",
    "The High Sparrow", 
    "Theon", 
    "Tommen Barathon", 
    "Tormund",
    "Tyrion", 
    "Tywin", 
    "Viserys", 
    "Vrays", 
    "Mirri Maz the Duur Witch", 
    "Ygritt"
    ]; 
  var charTitle = [
    "Acting Lord Commander of the Night's Watch", "Faceless Men", "King of the 7 Kingdoms", "The Three Eyed Raven", "Baratheon/Stark", "Sellsword", "Stark", "Baratheon", "Sellsword", "Mother of Dragons", "Baratheon/Stark", "Baratheon", "Lannister", "Stark", "Lord Commander of the Kingsguard", "Faceless Men", "King of the Seven Kingdoms", "Night's Watch", "Targaryen", "Dothraki khalasar", "Independent", "King Beyond the wall", "Lannister", "Dornish", "Lord of the Light", "Targaryen", "Lord Commander of the Night's Watch", "Hand to the King", "Dornish", "Lady of Highgarden", "Wildling", "Lannister", "Lannister", "Lannister", "Bolton", "King in the North", "Warden of the North", "Prostitute", "Night's Watch", "Lannister/Brotherhood with out Banners", "Lannister/Bolton", "Lannister", "King of the Andalls and the First Men", "High Septon", "Stark", "Lannister", "Wildling", "Hand of the Queen", "Hand of the King", "Advisor to the King", "Lannister/Targaryen", "Gypsy Tribe", "Wildling"];
  var charAllignment = ["Lawful Evil",
  "Chaotic Neutral", "Chaotic Neutral", "True Neutral", "Lawful Good", "Chaotic Neutral", "Lawful Neutral", "Lawful Evil", "Chaotic Good", "Chaotic Neutral", "Neutral Good", "Chaotic Good", "Lawful Evil", "True Neutral", "True Neutral", "Lawful Neutral", "Chaotic Evil", "Lawful Neutral", "Neutral Good", "Chaotic Neutral", "Lawful Evil", "Chaotic Neutral", "Lawful Neutral", "Lawful Neutral", "Lawful Evil ", "Lawful Neutral", "True Neutral", "Lawful Good", "True Neutral", "Lawful Neutral", "Chaotic Neutral", "Lawful Neutral", "Lawful Neutral", "Chaotic Evil", "Chaotic Evil ", "Neutral Good", "Neutral Evil", "Chaotic Neutral", "Chaotic Good", "Chaotic Neutral", "Neutral Good", "Neutral Good", "Chaotic Neutral", "Lawful Evil", "True Neutral", "Lawful Neutral", "Chaotic Neutral", "True Neutral ", "Lawful Evil ", "Lawful Neutral", "Chaotic Neutral", "Chaotic Evil", "Chaotic Neutral"];  
  var charStatus = ["Dead", 
  "Alive", "Dead", "Alive", "Alive", "Alive", "Dead", "Alive", "Alive", "Alive", "Alive", "Alive", "Alive", "Dead", "Alive", "Alive", "Dead", "Undead", "Alive", "Dead", "Dead", "Dead", "Dead", "Dead", "Alive", "Alive", "Dead", "Dead", "Dead", "Dead", "Dead", "Alive", "Alive", "Alive", "Dead", "Dead", "Dead", "Dead", "Alive", "Undead", "Alive", "Dead", "Dead", "Dead", "Alive", "Dead", "Alive", "Alive", "Dead", "Dead", "Alive", "Dead", "Dead"];  
    
  var randomize = Math.floor(Math.random() * charName.length);
  var  character = charName[randomize];
  var title = charTitle[randomize];
  var allignment = charAllignment[randomize];
  var status = charStatus[randomize];
  
  console.log(character);
  console.log(title);
  console.log(allignment);
  console.log(status);
  
  document.getElementById("characterR").innerHTML = ""+charName[randomize];
  document.getElementById("titleR").innerHTML = ""+charTitle[randomize];
  document.getElementById("allignmentR").innerHTML = ""+charAllignment[randomize];
  document.getElementById("statusR").innerHTML = ""+charStatus[randomize];
}

  
function tweetIt() {
  var gotCharacter = document.getElementById("character").innerText;
  var gotTitle = document.getElementById("title").innerText;
  var gotAllignment = document.getElementById("allignment").innerText;
  
  var tweetUrl = 'https://twitter.com/share?text=' + "My results from the GOT Character Generator: " + 
    encodeURI(gotAllignment) + ": " +
    encodeURIComponent(gotCharacter) + ": " +
    encodeURIComponent(gotTitle);
    '.' + "Get your character here -->";
    
  window.open(tweetUrl);
}

function shareIt() {
  var gotCharacter = document.getElementById("character").innerText;
  var gotTitle = document.getElementById("title").innerText;
  var gotAllignment = document.getElementById("allignment").innerText;
  
  var facebookUrl = 'https://www.facebook.com/sharer/sharer.php' + "My results from the GOT Character Generator: " + 
    encodeURI(gotAllignment) + ": " +
    encodeURIComponent(gotCharacter) + ": " +
    encodeURIComponent(gotTitle);
    '.' + "Get your character here -->";
    
  window.open(facebookUrl);
}