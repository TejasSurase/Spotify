
// we are using spotify api for authentications
export const authEndpoint = 
"https://accounts.spotify.com/authorize";

// when authentication is done, then user will redirected to our own home page
const redirectUri = "http://localhost:3000/"

// this we generated from spotify developers
const clientId = "17d0d3833f8d45db8a92bafa83af6a1f";

// scopes for users
// we dont want user to delete anything from our app
// so we are just giving read permission to user through scopes
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
];

// this will  get token from rl
export const getTokenFromUrl = () => {
        //this will go to the hashtag in url
    return window.location.hash
    // substring() extracts a part of a string, chopping string
    .substring(1)
    .split("&")   // split that string at '&'
    // The reduce() method executes a user-supplied “reducer” callback function on each element of the array
    .reduce((initial,item) => {
        // if url is #abc=xyz&name=tej
        var parts = item.split("="); // this will split at = signn
        initial[parts[0]]= 
        decodeURIComponent(parts[1]);   // abc is parts0 & part1 is xyz
        //The decodeURIComponent() method decodes a URI component.

       return initial ;

    }, {})


}

//now we will use above all the fields to make one url.
// string interpolation (using string and javascript in backticks like ``)
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
// here we are checking authpoint to check authentication
//then clientId & redirect URL & scope
// scope.join() means it will go in a each of scope written
// then we passed ascii code for space in join which is %20
// and lastly responsetype=token means it will give back a token if user is authenticated



// 1.6