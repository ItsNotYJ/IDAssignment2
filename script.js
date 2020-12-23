const clientID = '5b40f982691941e0b89906cee56d4a97';
const clientSecret = '6e8251a146634c6488985f4763e135cb';
const token_url = 'https://accounts.spotify.com/api/token';

// Smaller function to retrieve a promise
// Get Spotify Token fetch
async function GetToken(clientID, clientSecret, token_url) {
    const response = await fetch(token_url, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded',
            // Encode Base 64 String with (btoa)
            'Authorization' : 'Basic ' + btoa(clientID + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    })

    const json = await response.json();
    return json.access_token;
}

// Get Spotify User fetch
async function GetUsers(token, userID) {
    const response = await fetch(`https://api.spotify.com/v1/users/${userID}`, {
        method: 'GET',
        headers: {
            'Authorization' : 'Bearer ' + token
        }
    })

    const json = await response.json();
    return json;
}

// Get Spotify User's Playlist fetch
async function GetUserPlaylist(token, userID) {
    const limit = 3;

    const response = await fetch(`https://api.spotify.com/v1/users/${userID}/playlists?limit=${limit}`, {
        method: 'GET',
        headers: {
            'Authorization' : 'Bearer ' + token
        }
    })

    const json = await response.json();
    return json;
}

// Get Spotify Album's Tracks fetch
async function GetTrack(token, albumID) {
    const response = await fetch(`https://api.spotify.com/v1/albums/${albumID}/tracks`, {
        method: 'GET',
        headers: {
            'Authorization' : 'Bearer ' + token
        }
    })

    const json = await response.json();
    return json;
}

// Get Spotify Artist fetch
async function GetArtist(token, artistID) {
    const response = await fetch(`https://api.spotify.com/v1/artists/${artistID}`, {
        method: 'GET',
        headers: {
            'Authorization' : 'Bearer ' + token
        }
    })

    const json = await response.json();
    return json;
}

// Acts as the main function where all the code goes
async function RunAsync() {
    // My userID
    const myUserID = 'w2f8ozvkkxlr0swqer2f6uxor';
    // Recommended Artists
    const deanID = '3eCd0TZrBPm2n9cDG6yWfF';
    const zicoID = '4XpUIb8uuNlIWVKmgKZXC0';
    const ericNamID = '2FLqlgckDKdmpBrvLAT5BM';
    // Recommended Album Tracks
    const albumID1 = '1wW2yfORAbOEfn2Et1q687'; // Dean's album
    const albumID2 = '0aDnkPxX660ezxCWBcqzVo'; // Zico's album
    const albumID3 = '7buYKdXbAntzuYkJj2oY2G'; // Eric Nam's album
    // To retrieve the value of the token from the promise and process its use
    const token = await GetToken(clientID, clientSecret, token_url).catch(error => console.error(error));
    
}

// Run the main function