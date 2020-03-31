$(document).ready(function () {

    var typed = new Typed('.type', {
        strings: [
            'Stop the bad guy. ^1000',
            'Save the world. ^1000',
        ],
        smartBackspace: true,
        typeSpeed: 30,
        backSpeed: 22,
        loop: true  // Default value
    });

    // Randomize function
    const random = function (options) {
        const index = Math.floor(Math.random() * options.length);
        return options[index];
    }

    let userHealth = 3; 
    let cpuHealth = 3;

    function userHealthFunction() {
        if ( userHealth === 2) {
            $(`.user-heart-3`).removeClass(`fas`).addClass(`far`)
        }
        if (userHealth === 1) {
            $(`.user-heart-2`).removeClass(`fas`).addClass(`far`)
        }

        if (userHealth === 0 && cpuHealth === 0) {
            $(`.user-heart-1`).removeClass(`fas`).addClass(`far`)
            alert(`Tie Game`)
        }
        
        if (userHealth === 0) {
            $(`.user-heart-1`).removeClass(`fas`).addClass(`far`)
            alert(`You died!`)
        }
    }

    function cpuHealthFunction() {
        if (cpuHealth === 2) {
            $(`.cpu-heart-3`).removeClass(`fas`).addClass(`far`)
        }
        if (cpuHealth === 1) {
            $(`.cpu-heart-2`).removeClass(`fas`).addClass(`far`)
        }

        if (cpuHealth === 0 && userHealth >=1) {
            $(`.cpu-heart-1`).removeClass(`fas`).addClass(`far`)
            alert(`You win!`)
            // $(`.game-field`).html(`<img src="assets/youwin.gif">`)
            $(`.game-field`).html(`<video autoplay src="assets/youWin.mp4"></video>`).addClass(`black-background`)
        }
    }



    let userAmmo = 1; 
    let computerAmmo = 1;
    function userAmmoFunction (choice) {
        const userChoice = $(choice).attr(`id`);

        if ( userChoice === `reload` && userChoice !== 'shoot' ) {
            userAmmo = userAmmo + 1;
        } else if ($(choice).attr(`id`) === `shoot` && userAmmo !== 0) {
            userAmmo = userAmmo - 1;
        } 

        $(`.user-ammo-counter`).html(`${userAmmo}`);

    }

    const runComputerChoice = function() {
        // list of computer choices
        const computerOptions = [`shoot`, `block`, `reload`];
        if (computerAmmo >= 1) {
            random(computerOptions);
        } else if (computerAmmo == 0) {
            computerOptions.shift();
            console.log(computerOptions)
            random(computerOptions)
        }

        return computerChoice = random(computerOptions);
    }

    function computerAmmoFunction(userChoice) {

        if (computerChoice === `reload` && $(userChoice).attr(`id`) !== 'shoot') {
            computerAmmo = computerAmmo + 1;
        } else if ( computerChoice === `shoot` && computerAmmo !== 0) {
            computerAmmo = computerAmmo - 1;
        }

        $(`.computer-ammo-counter`).html(`${computerAmmo}`);

    }


    
    function runUserChoice(choice) {
        const userChoice = $(choice).attr(`id`);

        if (userAmmo == 0 && userChoice === `shoot`) {
            alert(`You need to reload before you can shoot!`)
        } 

        if (userChoice === `shoot` && computerChoice === `shoot` && userAmmo !== 0) {
            $(`h2.user-results`).text(`Tie`);
            userHealth = userHealth - 1;
            userHealthFunction();
            cpuHealth = cpuHealth - 1;
            cpuHealthFunction();
        } else if (userChoice === `shoot` && computerChoice === `block` && userAmmo !== 0) {
            $(`h2.user-results`).text(`Enemy blocked`);
        } else if (userChoice === `shoot` && computerChoice === `reload` && userAmmo !==0) {
            $(`h2.user-results`).text(`You shot him`);
            cpuHealth = cpuHealth - 1;
            cpuHealthFunction();
        } else if (userChoice === `block` && computerChoice === `shoot`) {
            $(`h2.user-results`).text(`You blocked a shot`);
        } else if (userChoice === `reload` && computerChoice === `shoot`) {
            $(`h2.user-results`).text(`You were hit`);
            userHealth = userHealth - 1;
            userHealthFunction();
        } else if (userChoice === `reload` && computerChoice !== `shoot`) {
            $(`h2.user-results`).text(`+ 1 ammo`);
        } else if (userChoice === `block` && computerChoice !== `shoot`) {
            $(`h2.user-results`).text(`You blocked`);
        } 
    }

    function runComputerOptions(userChoice) {


        // if (computerAmmo == 0 && computerChoice === `shoot`) {
        //     alert(`Computer can't shoot`)
        // }

    }


    
    $(`p.user-choice`).on(`click`, function(e) {
        e.preventDefault();
        runComputerChoice();
        computerAmmoFunction(this);
        runComputerOptions(this);
        runUserChoice(this);
        userAmmoFunction(this);
        console.log(computerChoice)
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






// OLD CODE THAT WORKED

    // const computerOptions = [`shoot`, `block`, `reload`];

    // const random = function (options) {
    //     const index = Math.floor(Math.random() * options.length);
    //     return options[index];
    // }

    // const computerChoice = random(computerOptions);
    // console.log(computerChoice);