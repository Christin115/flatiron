// Select Elements
const form = document.getElementById("search-form");
const input = document.getElementById("word-input");
const errorMessage = document.getElementById("error-message");
const wordTitle = document.getElementById("word-title");
const pronunciation = document.getElementById("pronunciation");
const partOfSpeech = document.getElementById("part-of-speech");
const definition = document.getElementById("definition");
const example = document.getElementById("example");
const synonyms = document.getElementById("synonyms");
const audioContainer = document.getElementById("audio-container");

// Event Listener
form.addEventListener("submit", handleSubmit);

// Handle Form Submission
function handleSubmit(event) {
  event.preventDefault();
  const word = input.value.trim();

  if (word === "") {

    displayError("Please enter a word.");

    return;
  }

  fetchWordData(word);

}


// Fetch Data From API

async function fetchWordData(word) {

  clearResults();

  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );

    if (!response.ok) {

      throw new Error("Word not found.");

    }

    const data = await response.json();

    displayWordData(data[0]);

  } catch (error) {
    displayError(error.message);
  }

}


// Display Word Data

function displayWordData(data) {
  // Word Title
  wordTitle.textContent = data.word;

  // Pronunciation
  const phoneticText =
    data.phonetics[0]?.text || "No pronunciation available";

  pronunciation.textContent =
    `Pronunciation: ${phoneticText}`;


  // Meaning Information
  const meaning = data.meanings[0];
  const definitionData = meaning.definitions[0];

  // Part of Speech
  partOfSpeech.textContent =
    `Part of Speech: ${meaning.partOfSpeech}`;

  // Definition
  definition.textContent =
    `Definition: ${definitionData.definition}`;

  // Example
  example.textContent =
    `Example: ${
      definitionData.example || "No example available"
    }`;

  // Synonyms
  if (
    definitionData.synonyms &&
    definitionData.synonyms.length > 0
  ) {

    synonyms.textContent =
      `Synonyms: ${definitionData.synonyms.join(", ")}`;

  } else {
    synonyms.textContent =
      "Synonyms: No synonyms available";

  }

  // Audio Pronunciation

  const audioURL =
    data.phonetics[0]?.audio || "";

  if (audioURL !== "") {

    audioContainer.innerHTML = `
      <audio controls>
        <source src="${audioURL}" type="audio/mpeg">
      </audio>
    `;

  } else {

    audioContainer.innerHTML =
      "<p>No audio available.</p>";

  }

}


// Display Error Message

function displayError(message) {

  errorMessage.textContent = message;

}

// Clear Previous Results

function clearResults() {

  errorMessage.textContent = "";
  
  wordTitle.textContent = "";

  pronunciation.textContent = "";

  partOfSpeech.textContent = "";

  definition.textContent = "";

  example.textContent = "";

  synonyms.textContent = "";

  audioContainer.innerHTML = "";

}