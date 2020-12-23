
const clientID = '5b40f982691941e0b89906cee56d4a97';
const clientSecret = '6e8251a146634c6488985f4763e135cb';
const url = 'https://accounts.spotify.com/api/token';

// Smaller function to retrieve a promise
async function GetToken(clientID, clientSecret, url) {
    const response = await fetch(url, {
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

// Acts as the main function where all the code goes
async function RunAsync() {
    // To retrieve the value of the token from the promise and process its use
    const Token = await GetToken(clientID, clientSecret, url).catch(error => console.error(error));
    console.log(Token);
}

// Run the main function