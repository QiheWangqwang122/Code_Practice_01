// Code Practice: Making a Scene
// Name: Qihe(Jason) Wang
// Date: 01/17/2024

"use strict"
//better debugg with use strict 
let config = {
    type: Phaser.AUTO,
    render:{
        pixelArt  : true
    },
    scene: [MainMenu, Play]     // Mainmenu.js Play.js
}

let game = new Phaser.Game(config)