
const animalSounds = {
  moo: "cow",
  neigh: "horse",
  baa: "sheep",
  oink: "pig",
  cluck: "chicken",
};

const { moo, neigh, baa, oink, cluck } = animalSounds;

const traditionalAnimalNames = {
  bessie: "cow",
  dolly: "sheep",
  babe: "pig",
  little: "chicken",
};

const { bessie, dolly, babe, little } = traditionalAnimalNames;

const animalColors = {
  blackAndWhite: "cow",
  black: "sheep",
  pink: "pig",
};

const { blackAndWhite, black, pink } = animalColors;

// Array Destructuring
const rainbowColors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
];

const [red, orange, yellow, green, blue, indigo, violet] = rainbowColors;

// Using initials for destructuring
const [r, o, y, g, b, , v] = rainbowColors; // Skipping "indigo"

const [, , , , , indg] = rainbowColors; // Assigning "indigo" to `indg`

// Object Destructuring
const muppet = {
  muppetName: "Miss Piggy",
  color: "pink",
  song: "Never Before, Never Again",
  job: "Cast member of The Muppet Show",
  partner: "Kermit",
};

const { muppetName, color, song, job, partner } = muppet;

const nestedMuppet = {
  song1: "The Rainbow Connection",
  song2: "Moving Right Along",
  song3: "Bein' Green",
  song4: "I Hope That Something Better Comes Along",
  nested: {
    job: "Host of The Muppet Show",
    partner: "Miss Piggy",
  },
};

const { song2, song4 } = nestedMuppet;
const { job: nestedJob, partner: nestedPartner } = nestedMuppet.nested;
