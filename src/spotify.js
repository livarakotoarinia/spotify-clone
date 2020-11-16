// We give the login logic to spotify
export const authEndpoint = "https://accounts.spotify.com/authorize";

// After user login in spotify he is redirected to our app
const redirectUri = "http://localhost:3000/";
const clientId = "8ab11f2a3fb045d6be1b02d37cc4a86b";

// give us permission to do things on spotify like play a song but not delete or publish a song
// We are not allowed to do anything if its not in the scope
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

// get access token from url
export const getTokenFromUrl = () => {
    // go to the url, search the hashtag and get the string after said hash then split the sting with the separator "&" and put everything in an array
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            // #accessToken=mytokencustom&name=name&name=name
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial
        }, {})
} 

// url adress to send user when login
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;