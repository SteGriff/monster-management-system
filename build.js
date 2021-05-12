console.log("I AM THE BUILD SCRIPT");
let y = 24 * 7;
console.log("I CAN DO MATHS. LOOK: ", y, "... SEE!");

const apiKey = process.env.kino_key;
const spaceId = "yk-V28eDrL3_WRznxA45a";

console.log("API key is: ", apiKey);
console.log("Space ID is: ", spaceId);

const apiRoot = "https://api.kinopio.club";
const requestUri = apiRoot + "/space/" + spaceId;

console.log("Request", requestUri);
