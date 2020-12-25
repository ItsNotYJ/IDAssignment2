# Personal Branding Page #
## About this project
So what is this website all about? Well this website is a personal website that I might use in the future in terms of personal branding. The audience of this website is mainly peers, family or potential future job recruiters. The website will basically be about me, what I do, who am I and some other miscellaneous information about myself such as my understanding in Web Development with HTML, CSS, Javascript, JQuery, AJAX and APIs. In the past, I have used wix before to create a personal branding website and I must say it was pretty good. However, there came to a point of limited customizability, hence, this would be a good reference project as well for future personal branding website creations.

This project will focus mainly on the use of the Spotify API to GET user playlists or user information. It will dive into use of Spotify's Client Credential Flow in order to gain access to the API with its unique token. With the spotify API, I will use it under my hobbies or a page where I'll display my own playlists and talk about my likings and stuff. That one page will contain most of the Spotify API usage whereas the other pages will mainly use javascript and css for styling. There may be a chance to include a few other APIs other than spotify as well for further interactivity.

## Commit 1.0
So for this first commit, I basically set up all the required files such as the css, js and html files required. Next, I started on playing around with the Spotify OAuth 2.0 Authorization in order to use the API. I had to watch a few videos here and there to understand the syntax behind the fetch method eg. (using btoa() to encode a string to base 64 as specified on the spotify *Client Credential Flows* header parameters)

At this stage, i'm still unclear about the usage of APIs hence, i'm still watching videos to understand how to use them. Although the method used are similar to how the api tokens are retrieved in the videos, the use of the tokens are completely different.

Most of the syntax of the API token, I just followed the spotify API guide on their own website where they have listed for developers on how to use their API. Now I also have figured out how to use await/async with fetch to retrieve data asynchronously to prevent promise-chaining such as the use of .then() multiple times. With that it makes the code neater and also easier to understand.

Lastly, I have more or less set up the template to be used for my README.md (To be updated/commit).

#### General Summary:
* Finished setting up all files required
* Successfully retrieved spotify token from the API
* Figured out how to retrieve value from async function

## Commit 1.1
I added additional GET fetch requests for getting a user's spotify profile, a user's playlists, a artist's profile, tracks from the artist's album. I set a limit to the number of playlists I can display in case I do add more in the future.

I have yet to start on the html base nor css. Right now i'm still messing around with the API and checking if each function created works and generates the correct data required. If any issues, it will be fixed by commit 1.2.

#### General Summary:
* Added required spotify fetch requests/functions
* Testing and fixing errors for each fetch request to be done by commit 1.2

## Commit 1.2
So I checked all the fetch functions and they all are able to acquire the data I need to display on the pages. I also created the extra htmls for the other pages that I need. Plus in the css file, I did the basic lines to reset the page so that there's nothing bothering the raw html code and other css code.

Lastly, I made a simple navbar where I plan on refining it and making it look nicer.

#### General Summary:
* Checked all fetch requests
* Made a simple navigation bar with bootstrap

## Commit 1.3
So I have completed the whole of the home page with the background image and image title all coded. I have also done the responsiveness for the home page so as to save time when moving on the future pages. I refined the navbar a slight bit by making it fixed-top so it will follow as the user scrolls. I intend to animate the image title text with javascript by commit 1.4.

#### General Summary:
* Finished home page
* Made home page responsive

## Features:
### TBA:
* 
* 

### Existing:
* 

## Technologies Used: (To be linked an description of use)
* []()
* []()

## Testing
### For commit 1.0:
I had an issue trying to retrieve the data from the async function as it kept returning a promise instead of a value when I console log it. After a bit of research I realised that in order to retrieve the value of the async function I need to call the async function inside of another async function, similar to that of wrapping. Though i'm still need super clear on the full reasoning behind this, I at least understand a slight bit more on how to retrieve API values now.

### Web Browsers Tested On:
* 
* 

## Credits:
### Content:
* []()

### Media:
* []()

### Acknowledgements:
* []()