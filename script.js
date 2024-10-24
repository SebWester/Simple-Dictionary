// Make my own dictionary
const serachBar = document.getElementById("searchWord");
const searchBtn = document.getElementById("searchButton");

// All paragraphs to fill with text
let word = document.getElementById("thisWord");
let phonetic = document.getElementById("thisPhonetic");
let meaning = document.getElementById("thisMeaning");
let definition = document.getElementById("thisDefinition");
let synonyms = document.getElementById("thisSynonyms");

// Get text from the text input
function getSearchedWord() {
  let searchedWord = document.getElementById("searchWord").value;

  lookUpDef(searchedWord);
}

// Search word when clicked
searchBtn.addEventListener("click", getSearchedWord);

// Search word when typed in search bar and pressing enter
serachBar.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    getSearchedWord();
  }
});

// Fetching info
async function lookUpDef(checkThis) {
  try {
    // Fetching API
    const getApi = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${checkThis}`
    );

    // Accessing API Json and logging it
    const getJson = await getApi.json();
    console.log(getJson);

    // Adding text to definition div
    word.textContent = `${getJson[0].word}`;
    phonetic.textContent = `${getJson[0].phonetics[0].text}`;
    meaning.textContent = `${getJson[0].meanings[0].partOfSpeech}.`;
    // FIX THIS FUCKER
    // iZ wÖÖÖRkINg?
    definition.textContent = `${getJson[0].meanings[0].definitions[0].definition}`;
    synonyms.textContent = `${getJson[0].meanings[0].synonyms[0]}`;
  } catch (err) {
    console.log("Something went bananas - " + err);
  }
}

// Accessing and showing time and date
let showTime = document.getElementById("time");
let showDate = document.getElementById("date");

function getTime() {
  let hour = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();

  hour = hour < 10 ? "0" + hour : hour;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  showTime.textContent = hour + ":" + minutes + ":" + seconds;
}

function getDate() {
  let month = new Date().getMonth();
  let day = new Date().getDay();
  let weekDay;

  switch (month) {
    case 0:
      month = "Jan";
      break;
    case 1:
      month = "Feb";
      break;
    case 2:
      month = "Mar";
      break;
    case 3:
      month = "Apr";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "Jun";
      break;
    case 6:
      month = "Jul";
      break;
    case 7:
      month = "Aug";
      break;
    case 8:
      month = "Sep";
      break;
    case 9:
      month = "Oct";
      break;
    case 10:
      month = "Nov";
      break;
    case 11:
      month = "Dec";
      break;
  }

  switch (day) {
    case 0:
      weekDay = "Sunday";
      break;
    case 1:
      weekDay = "Monday";
      break;
    case 2:
      weekDay = "Tuesday";
      break;
    case 3:
      weekDay = "Wednesday";
      break;
    case 4:
      weekDay = "Thursday";
      break;
    case 5:
      weekDay = "Friday";
      break;
    case 6:
      weekDay = "Saturday";
      break;
  }

  showDate.textContent = weekDay + " " + day + " " + month;
}

setInterval(getTime, 1000);
setInterval(getDate, 1000);
