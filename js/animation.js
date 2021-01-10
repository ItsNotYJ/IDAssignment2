/*jshint esversion: 6 */ 
// Home page text animation
function HomeAnimation() {
    const anText = baffle('.homeImgTitle');
    anText.set({
        characters: '>██ ░▒▒▓█ <▓<█▓ >█> <▓░▓> █▓░░ ▒░▒ ▓▒░▒ ▒█░▒',
        speed: 150
    });
    anText.start();
    anText.reveal(4000);
}

// Run the functions
HomeAnimation();
