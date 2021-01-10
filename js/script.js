/* jshint esversion: 8 */
// Spotify API
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
    });

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
    });

    const json = await response.json();
    return json;
}

// Get Spotify User's Playlist fetch
async function GetUserPlaylist(token, playlistID) {
    const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistID}`, {
        method: 'GET',
        headers: {
            'Authorization' : 'Bearer ' + token
        }
    });

    const json = await response.json();
    return json;
}

// Get Spotify Album's Tracks fetch
async function GetTrack(token, trackID) {
    const response = await fetch(`https://api.spotify.com/v1/tracks/${trackID}`, {
        method: 'GET',
        headers: {
            'Authorization' : 'Bearer ' + token
        }
    });

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
    });

    const json = await response.json();
    return json;
}

// Insert user data into HTML function
function InsertUserHTML(userData) {
    $(".mySpotify img").attr("src", `${userData.images[0].url}`);
    $(".mySpotify a").attr("href", `${userData.external_urls.spotify}`);
    $(".spotifyMe").text(`${userData.display_name}`);
}

// Insert playlist information into HTML function
function InsertPlaylistHTML(kpopplaylistData, popplaylistData, rnbplaylistData) {
    // Playlist 1
    $(".playlist1 img").attr("src", `${kpopplaylistData.images[1].url}`);
    $(".playlist1 a").attr("href", `${kpopplaylistData.external_urls.spotify}`);
    $(".playlist1 h4").text(`${kpopplaylistData.name}`);

    // // // Playlist 2
    $(".playlist2 img").attr("src", `${popplaylistData.images[1].url}`);
    $(".playlist2 a").attr("href", `${popplaylistData.external_urls.spotify}`);
    $(".playlist2 h4").text(`${popplaylistData.name}`);

    // // Playlist 3
    $(".playlist3 img").attr("src", `${rnbplaylistData.images[1].url}`);
    $(".playlist3 a").attr("href", `${rnbplaylistData.external_urls.spotify}`);
    $(".playlist3 h4").text(`${rnbplaylistData.name}`);
}

function InsertArtistHTML(deanData, zicoData, ericData) {
    // Dean
    $(".artist1 a").attr("href", `${deanData.external_urls.spotify}`);
    $(".artist1 img").attr("src", `${deanData.images[1].url}`);
    $(".artist1 h4").text(`${deanData.name}`);

    // Zico
    $(".artist2 a").attr("href", `${zicoData.external_urls.spotify}`);
    $(".artist2 img").attr("src", `${zicoData.images[1].url}`);
    $(".artist2 h4").text(`${zicoData.name}`);

    // Eric
    $(".artist3 a").attr("href", `${ericData.external_urls.spotify}`);
    $(".artist3 img").attr("src", `${ericData.images[1].url}`);
    $(".artist3 h4").text(`${ericData.name}`);
}

function InsertArtistSongHTML(deanData, zicoData, ericData) {
    // Dean
    $(".song1Info img").attr("src", `${deanData.album.images[1].url}`);
    $(".song1Info a").attr("href", `${deanData.external_urls.spotify}`);
    $(".song1Text p").text(`${deanData.artists[0].name}`);
    $(".song1Text h4").text(`${deanData.name}`);

    // Zico
    $(".song2Info img").attr("src", `${zicoData.album.images[1].url}`);
    $(".song2Info a").attr("href", `${zicoData.external_urls.spotify}`);
    $(".song2 p").text(`${zicoData.artists[0].name}`);
    $(".song2 h4").text(`${zicoData.name}`);
    
    // Eric
    $(".song3Info img").attr("src", `${ericData.album.images[1].url}`);
    $(".song3Info a").attr("href", `${ericData.external_urls.spotify}`);
    $(".song3 p").text(`${ericData.artists[0].name}`);
    $(".song3 h4").text(`${ericData.name}`);
}

// Manga API
// Get Anime fetch function
async function GetAnime(animeName) {
    const response = await fetch(`https://kitsu.io/api/edge/anime?filter[text]="${animeName}"`, {
        method: 'GET',
        headers: {
            'Accept' : 'application/vnd.api+json',
            'Content-Type' : 'application/vnd.api+json'
        }
    });

    const json = await response.json();
    return json;
}

// Get Manga fetch function
async function GetManga(mangaName) {
    const response = await fetch(`https://kitsu.io/api/edge/manga?filter[text]="${mangaName}"`, {
        method: 'GET',
        headers: {
            'Accept' : 'application/vnd.api+json',
            'Content-Type' : 'application/vnd.api+json'
        }
    });

    const json = await response.json();
    return json;
}

// Insert Anime data into HTML
function Loading() {
    $('.loading').hide();
}

function InsertAnimeHTML(haikyuuData, hxhData, dnaData, yoiData, apotheosisData, togData, slData, knkData) {
    // Haikyuu
    $(".anime1 a").attr("href", `https://kitsu.io/anime/${haikyuuData.data[0].id}`);
    $(".anime1 img").attr("src", `${haikyuuData.data[0].attributes.posterImage.medium}`);
    $(".anime1 h4").text(`${haikyuuData.data[0].attributes.titles.en}`);
    $(".anime1 h3").text(`${haikyuuData.data[0].attributes.titles.ja_jp}`);

    // HxH
    $(".anime2 a").attr("href", `https://kitsu.io/anime/${hxhData.data[0].id}`);
    $(".anime2 img").attr("src", `${hxhData.data[0].attributes.posterImage.medium}`);
    $(".anime2 h4").text(`${hxhData.data[0].attributes.titles.en}`);
    $(".anime2 h3").text(`${hxhData.data[0].attributes.titles.ja_jp}`);

    // Diamond No Ace
    $(".anime3 a").attr("href", `https://kitsu.io/anime/${dnaData.data[0].id}`);
    $(".anime3 img").attr("src", `${dnaData.data[0].attributes.posterImage.medium}`);
    $(".anime3 h4").text(`${dnaData.data[0].attributes.titles.en}`);
    $(".anime3 h3").text(`${dnaData.data[0].attributes.titles.ja_jp}`);

    // Yuri On Ice
    $(".anime4 a").attr("href", `https://kitsu.io/anime/${yoiData.data[0].id}`);
    $(".anime4 img").attr("src", `${yoiData.data[0].attributes.posterImage.medium}`);
    $(".anime4 h4").text(`${yoiData.data[0].attributes.titles.en}`);
    $(".anime4 h3").text(`${yoiData.data[0].attributes.titles.ja_jp}`);

    // Apotheosis
    $(".manga1 a").attr("href", `https://kitsu.io/manga/${apotheosisData.data[0].id}`);
    $(".manga1 img").attr("src", `${apotheosisData.data[0].attributes.posterImage.medium}`);
    $(".manga1 h4").text(`${apotheosisData.data[0].attributes.titles.en}`);
    $(".manga1 h3").text(`${apotheosisData.data[0].attributes.titles.zh_cn}`);
    
    // Tower of God
    $(".manga2 a").attr("href", `https://kitsu.io/manga/${togData.data[0].id}`);
    $(".manga2 img").attr("src", `${togData.data[0].attributes.posterImage.medium}`);
    $(".manga2 h4").text(`${togData.data[0].attributes.titles.en}`);
    $(".manga2 h3").text(`${togData.data[0].attributes.titles.ko_kr}`);

    // Solo Leveling
    $(".manga3 a").attr("href", `https://kitsu.io/manga/${slData.data[0].id}`);
    $(".manga3 img").attr("src", `${slData.data[0].attributes.posterImage.medium}`);
    $(".manga3 h4").text(`${slData.data[0].attributes.titles.en}`);
    $(".manga3 h3").text(`${slData.data[0].attributes.titles.ko_kr}`);

    // Koe no Kitachi
    $(".manga4 a").attr("href", `https://kitsu.io/manga/${knkData.data[0].id}`);
    $(".manga4 img").attr("src", `${knkData.data[0].attributes.posterImage.medium}`);
    $(".manga4 h4").text(`${knkData.data[0].attributes.titles.en}`);
    $(".manga4 h3").text(`${knkData.data[0].attributes.titles.ja_jp}`);
}

// Acts as the main function where all the code goes
async function RunAsync() {
    // My userID
    const myUserID = 'w2f8ozvkkxlr0swqer2f6uxor';

    // My playlistID
    const kpop = '6NEfCdpcUNNACjWeaMIQSn';
    const pop = '5mrGnMae6rxfowb0cSAW28';
    const rnb = '348eIPwqwnLM1eX5iSFpel';

    // Recommended Artists
    const deanID = '3eCd0TZrBPm2n9cDG6yWfF';
    const zicoID = '4XpUIb8uuNlIWVKmgKZXC0';
    const ericNamID = '2FLqlgckDKdmpBrvLAT5BM';

    // Recommended Album Tracks
    const trackID1 = '6z1kLsntE7FuzKZHZWrXYN'; // Dean's album
    const trackID2 = '1pz24zu5H9A0S1a2NKT4F0'; // Zico's album
    const trackID3 = '7Mfb2IwRNP8Qi7Ojtpmi37'; // Eric Nam's album

    // To retrieve the value of the token from the promise and process its use
    const token = await GetToken(clientID, clientSecret, token_url).catch(error => console.error(error));

    // Retrieve user information
    const myUserData = await GetUsers(token, myUserID).catch(error => console.error(error));

    // Insert user information into HTML
    InsertUserHTML(myUserData);

    // Retrieve user playlists information
    const kpopPlaylist = await GetUserPlaylist(token, kpop).catch(error => console.error(error));
    const popPlaylist = await GetUserPlaylist(token, pop).catch(error => console.error(error));
    const rnbPlaylist = await GetUserPlaylist(token, rnb).catch(error => console.error(error));

    // Insert user playlist information into HTML
    InsertPlaylistHTML(kpopPlaylist, popPlaylist, rnbPlaylist);

    // Retrieve artists information
    const artistDean = await GetArtist(token, deanID).catch(error => console.error(error));
    const artistZico = await GetArtist(token, zicoID).catch(error => console.error(error));
    const artistEricNam = await GetArtist(token, ericNamID).catch(error => console.error(error));

    // Insert artist  information into HTML
    InsertArtistHTML(artistDean, artistZico, artistEricNam);

    // // Retrieve artists song information
    const artistDeanTrack = await GetTrack(token, trackID1).catch(error => console.error(error));
    const artistZicoTrack = await GetTrack(token, trackID2).catch(error => console.error(error));
    const artistEricTrack = await GetTrack(token, trackID3).catch(error => console.error(error));

    // Insert Artist Song information into HTML
    InsertArtistSongHTML(artistDeanTrack, artistZicoTrack, artistEricTrack);

    // Anime API
    // Get Anime Response
    const haikyuu = await GetAnime("haikyuu").catch(error => console.log(error));
    const hxh = await GetAnime("hunter x hunter").catch(error => console.log(error));
    const dna = await GetAnime("diamond no ace").catch(error => console.log(error));
    const yoi = await GetAnime("yuri on ice").catch(error => console.log(error));

    // // Get Manga response
    const apotheosis = await GetManga("apotheosis").catch(error => console.log(error));
    const tog = await GetManga("tower of god").catch(error => console.log(error));
    const sl = await GetManga("solo leveling").catch(error => console.log(error));
    const knk = await GetManga("koe no katachi").catch(error => console.log(error));

    // Insert Anime and Manga into HTML
    InsertAnimeHTML(haikyuu, hxh, dna, yoi, apotheosis, tog, sl, knk);
    Loading();

    // Responsiveness
    const ipad = window.matchMedia("(max-width: 768px)");
    Ipad768px(ipad, haikyuu, hxh, dna, yoi, apotheosis, tog, sl, knk);
    ipad.addListener(Ipad768px);
}

// Run the functions
RunAsync();

// Media Query
function Ipad768px(x, haikyuu, hxh, dna, yoi, apotheosis, tog, sl, knk) {
  function InsertAnimeHTML(haikyuuData, hxhData, dnaData, yoiData, apotheosisData, togData, slData, knkData) {
            // Anime
            $(".anime1 img").attr("src", `${haikyuuData.data[0].attributes.posterImage.small}`);
            $(".anime2 img").attr("src", `${hxhData.data[0].attributes.posterImage.small}`);
            $(".anime3 img").attr("src", `${dnaData.data[0].attributes.posterImage.small}`);
            $(".anime4 img").attr("src", `${yoiData.data[0].attributes.posterImage.small}`);
            
            // Manga
            $(".manga1 img").attr("src", `${apotheosisData.data[0].attributes.posterImage.small}`);
            $(".manga2 img").attr("src", `${togData.data[0].attributes.posterImage.small}`);
            $(".manga3 img").attr("src", `${slData.data[0].attributes.posterImage.small}`);
            $(".manga4 img").attr("src", `${knkData.data[0].attributes.posterImage.small}`);
        }
  
    if (x.matches) {
        // Section 1
        $(".social1 img").attr("src", "followIMG/instagramSmall.png");
        $(".social2 img").attr("src", "followIMG/linkedinSmall.png");
        $(".social3 img").attr("src", "followIMG/telegramSmall.png");
        
        InsertAnimeHTML(haikyuu, hxh, dna, yoi, apotheosis, tog, sl, knk);
    }
    else {
        $(".social1 img").attr("src", "followIMG/instagram.png");
        $(".social2 img").attr("src", "followIMG/linkedin.png");
        $(".social3 img").attr("src", "followIMG/telegram.png");
    }
}