$(document).ready(function () {

    // function runComputerChoice() {}

    const computerOptions = [`shoot`, `block`, `reload`];

    const random = function (options) {
        const index = Math.floor(Math.random() * options.length);
        return options[index];
    }
    
    const computerChoice = random(computerOptions);
    console.log(computerChoice);


    // function play() {
    //     const computerOptions = [`shoot`, `block`, `reload`];

    //     const random = function (options) {
    //         const index = Math.floor(Math.random() * options.length);
    //         return options[index];
    //     }

    //     const computerChoice = random(computerOptions);
    //     console.log(computerChoice)
    // }

    
    $(`a.user-choice`).on(`click`, function(e) {
        e.preventDefault();
        // play();
        const userChoice = $(this).attr(`id`);

        if (userChoice === `shoot` && computerChoice === `shoot`) {
            $(`h2.results`).text(`Tie!`);
        } else if (userChoice === `shoot` && computerChoice === `block`) {
            $(`h2.results`).text(`Enemy blocked!`);
        } else if (userChoice === `shoot` && computerChoice === `reload`) {
            $(`h2.results`).text(`You shot him!`);
        } else if (userChoice === `block` && computerChoice === `shoot`) {
            $(`h2.results`).text(`You blocked a shot!`);
        } else if (userChoice === `reload` && computerChoice === `shoot`) {
            $(`h2.results`).text(`You were hit!`);
        } else if (userChoice === `reload` && computerChoice !== `shoot`) {
            $(`h2.results`).text(`+ 1 ammo`);
        } else if (userChoice === `block` && computerChoice !== `shoot`) {
            $(`h2.results`).text(`block`);
        } 
    });
});
//Landing page, introduce the game. Click to play

// Create a choice for user - shoot / reload / sheild

// On click, userChoice should compare to computerChoice

// computerChoice is randomized (same options: shoot / reload / sheild)


// both user start off with one bullet, at 0 bullets "shoot" cannot be an option

// each reload adds one bullet (i++)

// have a bullet counter for both user and computer

// block vs block = nothing | reload vs reload = nothing | 
// shoot vs block = nothing | reload vs block = nothing |
// shoot vs shoot = tie
// shoot vs reload = win

// stretch
// Have life points (3) that count down
// at 3 bullets, you get "golden gun" which can shoot through a block
// option to choose gun at beginning (no effect on game, just for fun)





// MVP

// 1) Landing page
// 2) Game works without bullets
// 3) Pop up saying you win or lose


// Stretch goals
// 1) Looks groovy
// 2) Bullet counting mechanism works
// 3) Bond related gifs play when you win or lose, customized for the situation
// 4) Having health hearts (like in Zelda) or health bars (like in golden eye) for longer play
// 5) option to choose a gun on landing page
