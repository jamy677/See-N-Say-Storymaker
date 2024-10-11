// Arrays of words/phrases for each part of the sentence
const subjects = ["The cat", "The dog", "The Turkey", "The elephant", "My teacher", "Mom", "Dad"];
const verbs = ["Sat On", "Ate", "Danced With", "Saw", "doesn't like", "Kissed"];
const objects = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
const places = ["in the park", "at school", "on the beach", "at home", "in the zoo"];
const times = ["in the morning", "at night", "during the afternoon", "before dinner", "after school"];

let currentSubject = "";
let currentVerb = "";
let currentObject = "";
let currentPlace = "";
let currentTime = "";

// Functions to cycle through words for each part of the sentence
function chooseSubject() {
    currentSubject = subjects[Math.floor(Math.random() * subjects.length)];
    document.getElementById('subjectOutput').innerText = currentSubject;
}

function chooseVerb() {
    currentVerb = verbs[Math.floor(Math.random() * verbs.length)];
    document.getElementById('verbOutput').innerText = currentVerb;
}

function chooseObject() {
    currentObject = objects[Math.floor(Math.random() * objects.length)];
    document.getElementById('objectOutput').innerText = currentObject;
}

function choosePlace() {
    currentPlace = places[Math.floor(Math.random() * places.length)];
    document.getElementById('placeOutput').innerText = currentPlace;
}

function chooseTime() {
    currentTime = times[Math.floor(Math.random() * times.length)];
    document.getElementById('timeOutput').innerText = currentTime;
}

// Function to display the complete story
function showCompleteStory() {
    if (currentSubject && currentVerb && currentObject && currentPlace && currentTime) {
        const story = `${currentSubject} ${currentVerb} ${currentObject} ${currentPlace} ${currentTime}.`;
        document.getElementById('storyOutput').innerText = story;
    } else {
        alert("Please choose all parts of the story first!");
    }
}

// Function to generate a random story
function generateRandomStory() {
    chooseSubject();
    chooseVerb();
    chooseObject();
    choosePlace();
    chooseTime();
    showCompleteStory();
}

// Function to reset the story selection
function resetStory() {
    currentSubject = "";
    currentVerb = "";
    currentObject = "";
    currentPlace = "";
    currentTime = "";
    document.getElementById('subjectOutput').innerText = "";
    document.getElementById('verbOutput').innerText = "";
    document.getElementById('objectOutput').innerText = "";
    document.getElementById('placeOutput').innerText = "";
    document.getElementById('timeOutput').innerText = "";
    document.getElementById('storyOutput').innerText = "";
}

// Event listeners for the buttons
document.getElementById('subjectBtn').addEventListener('click', chooseSubject);
document.getElementById('verbBtn').addEventListener('click', chooseVerb);
document.getElementById('objectBtn').addEventListener('click', chooseObject);
document.getElementById('placeBtn').addEventListener('click', choosePlace);
document.getElementById('timeBtn').addEventListener('click', chooseTime);
document.getElementById('completeStoryBtn').addEventListener('click', showCompleteStory);
document.getElementById('randomStoryBtn').addEventListener('click', generateRandomStory);
document.getElementById('resetBtn').addEventListener('click', resetStory);
