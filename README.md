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

## Commit 1.4
Animated the image title text and also changed the font to poppins to make it resemble a programming language font. This is just a small representation of what I do like programming and the video game vibes of the home background.

#### General Summary:
* Animated home image title
* Changed home image title font to Poppins
* Adjusted the responsiveness in css for the new font

## Commit 2.0
Now I have started on the about me page. I have added the main background image for the page with a slight black dim to make the text easier to read. I have laid out the basic texts and headers I need before adding my image carousel and self portrait.

#### General Summary:
* Added base layer of about page

## Commit 2.1
I have added the image carousel to showcase a few images of me and some of the few things that I enjoy doing. I also formatted it so that its all centred with slide control for the user to look at the pictures with their own control. Similarly, I decreased the interval timing so that it won't take to long to showcase all the pictures.

I may plan to add more pictures in the future but for now this will do. I plan to add my self portrait in the next commit. Plus for the background image, i made it parallax but I have yet to do it in the responsiveness.

#### General Summary:
* Added image carousel
* Formatted the carousel and positioning of the carousel
* Modified image slide interval and shortened it
* Background image made parallax

## Commit 2.2
Now I have added my self portrait with a text overlay where when users hover over the picture it shows my information. With a bit of border radius to make it look more like a profile picture as well.

I also played around with the background dim, but i'll be adding text animations soon so I may have to adjust again after. I'll deal with the page responsiveness in the next commit as well.

#### General Summary:
* Added self portrait/profile picture
* Adjusted background dim

## Commit 2.3
I changed the format of the about me text a bit and added a glitch effect to the titles of the text and carousel. I learned how to do this by watching a video where it used CSS to create effects and shift the text. It's very cool, I'll credit the video in my references, I'll definitely want to use it in the future as well.

Also, I finished the responsiveness for the page, so officially the about page is completed. However, I'm still considering if I should add my hobbies and other information under this page or should I create additional pages to display those information, I will probably decide on this when I finish the other main pages.

#### General Summary:
* Finished Responsiveness for about page
* Added glitch effect to the text title and carousel title
* Dilemma on where to display additional information

## Commit 3.0
I forgot to mention that I created a seperate js file for text animations and stuff so that I won't have to mix the functions and disrupt the flow. Plus it helps with the asynchronous loading as well. So first off, for the accolade page I have added my favourite memmories section and formatted it accordingly. I think that i'll likely use the glitch effect animation for titles which makes it more constant throughout the pages isntead of using multiple different animations.

I did end up changing the file name for experiences to accolades as I felt that it was a better representation of what was going to be displayed on that page. I won't do animations for this page yet, I'll likely do it near the end of the project. I do hope to add page transitions as well. Lastly, I filled up the other README section accordingly.

#### General Summary:
* Added glitch effect to titles
* Completed memories section
* Added all required pictures
* Changed file name and all according references accordlingy

## Commit 3.1
Now I have completed the additional rewards section which showcases the other few rewards that I have received through my secondary school years that I feel proud of displaying. I kept switching between using bootstrap cards to show the information but in the end I felt that the bootstrap cards weren't really suitable (Not attractive/good looking) and it doesn't fit the vibe of the page or website in general. Just feels out of place thus I didn't use bootstrap cards and just went with normal flexbox layouting.

All the award information/description, I referenced them from the proper websites. Linked under credits/references.

#### General Summary:
* Completed additional awards section
* Did not include bootstrap cards for various reasons
* Credited award description pages

## Commit 3.2
I have completed the whole page except for responsiveness. I added the skills section to showcase my current skills, I do plan on adding on to it in the future as well. The page responsiveness is yet to be completed but it will be done by the next commit. For the skill section, I made use of the progress bars from bootstrap to show how much of that skill I have mastered or understand at this current point in time.

I felt that with the progress bars, its easier to read and tell how far I have progressed instead of me using like percentage or words to describe.

#### General Summary:
* Completed accolades page
* Responsiveness to be done by the next commit
* Added skills section
* Used Boostrap Progress Bars for skills section

## Commit 3.3
This is just a commit where I clean up my file organization as well as touch up on some of my responsiveness code for the assignment checkpoint.

#### General Summary:
* Slight touch up of code for assignment checkpoint
* Re-organized file structure to make folder neater

## Features:
### TBA:
* Popup Alert/Notification users to choose for reduced motion on webpage
* Page Animations
* Text Animations for certain pages
* Some sort of contact form (Not confirmed)

### Existing:
* Home Page
* About Page
* Accolades Page
* Follow Me Page
* Spotify API Features
* Cool External JS Library Text Animations
* Bootstrap Usage
* Attractive Background Display for each page

## Technologies Used:
* [HTML](https://www.w3schools.com/html/)
    * Language used to code the front-end of the webpage
* [CSS](https://www.w3schools.com/css/)
    * Language that was used to perform styling on HTML elements in the project
* [Javascript](https://www.javascript.com/)
    * Javascript language used to create interactive hamburger menu for the website
* [JQuery](https://jquery.com/)
    * Javascript Library used to improve javascript experience and DOM traversal more efficient.
* [Bootstrap](https://getbootstrap.com/)
    * Front-end open source toolkit for HTML, mainly for ease-of use
* [Visual Studio Code](https://code.visualstudio.com/)
    * IDE used to code HTML, CSS and JS for the project
* [Adobe XD](https://www.adobe.com/sea/products/xd.html)
    * Used Adobe XD to create the wireframe and layout for the website
* [Normalize css](https://necolas.github.io/normalize.css/)
    * Normalize.css was used to render all elements more consistently and in line with modern standards
* [Spotify API](https://developer.spotify.com/documentation/web-api/)
    * API used to display client spotify information or user information required for the website

## Testing
### For commit 1.0:
I had an issue trying to retrieve the data from the async function as it kept returning a promise instead of a value when I console log it. After a bit of research I realised that in order to retrieve the value of the async function I need to call the async function inside of another async function, similar to that of wrapping. Though i'm still need super clear on the full reasoning behind this, I at least understand a slight bit more on how to retrieve API values now.

### Main Web Browsers Tested On:
* Microsoft Edge
* Mozilla Firefox
* Internet Explorer
* Google Chrome

## Credits:
### Content:
* [W3Schools Parralax](https://www.w3schools.com/howto/howto_css_parallax.asp)
* [W3Schools BTOA Function](https://www.w3schools.com/jsref/met_win_btoa.asp)
* [Spotify API Authorization](https://developer.spotify.com/documentation/general/guides/authorization-guide/#authorization-flows)
* [Spotify API Client Dashboard](https://developer.spotify.com/dashboard/)
* [Spotify Web API References](https://developer.spotify.com/documentation/web-api/reference-beta/#reference-index)
* [Bootstrap Navbar](https://getbootstrap.com/docs/5.0/components/navbar/)
* [Boostrap Carousel](https://getbootstrap.com/docs/5.0/components/carousel/)
* [Boostrap Progress](https://getbootstrap.com/docs/5.0/components/progress/)
* [Body.JSON MDN](https://developer.mozilla.org/en-US/docs/Web/API/Body/json)
* [How to display or view fetch promises from async function returns](https://github.com/Keyang/node-csvtojson/issues/278)
* [Home Page Background Image](https://in.pinterest.com/pin/406027722638256743/)
* [Home Page Small Device Background Image](https://cutewallpaper.org/download.php?file=/21/pixel-wallpaper-gif/Animated-gif-about-gif-in-wallpaper-by-Iren.gif)
* [Baffle JS github](https://www.jsdelivr.com/package/npm/baffle)
* [Baffle.js](https://camwiegert.github.io/baffle/#demo)
* [Poppins Font](https://fonts.google.com/specimen/Poppins)
* [Bebas Neue](https://fonts.google.com/specimen/Bebas+Neue?preview.text=About&preview.text_type=custom&preview.size=20&sidebar.open=true&selection.family=Bebas+Neue#glyphs)
* [About Page Background Image](https://www.artstation.com/artwork/GXwZgz)
* [Accolades Page Background Image](https://www.reddit.com/r/Cyberpunk/comments/93n804/pixelart_by_waneella_for_digitocracy_short_story/)
* [MBS Award Description](https://www.3blmedia.com/News/Marina-Bay-Sands-Distributes-Youth-Education-Award-Team-Members-Children)
* [MOE Award Description](https://beta.moe.gov.sg/fees-assistance-awards-scholarships/awards-scholarships/edusave-awards/)
* [SSSC Award Description](https://www.moe.gov.sg/docs/default-source/document/media/press/2018/singapore-schools-sports-council-colours-awards-2018-annex-a.pdf)

### Media:
* [How to use fetch](https://www.youtube.com/watch?v=tc8DU14qX6I&ab_channel=TheCodingTrain)
* [How to use baffle.js](https://www.youtube.com/watch?v=7_VfE4k7h1s&ab_channel=Codegrid)
* [Glitch Text Animation Tutorial](https://www.youtube.com/watch?v=7Xyg8Ja7dyY&ab_channel=KevinPowell)

### Acknowledgements:
* [Spotify](https://www.spotify.com/us/)
* [Boostraps](https://getbootstrap.com/)
* [W3Schools](https://www.w3schools.com/)
* [Youtube](https://www.youtube.com/)
* [Google Fonts](https://fonts.google.com/)