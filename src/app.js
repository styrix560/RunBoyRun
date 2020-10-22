import { Player } from "./player.js";
import {Ground } from "./ground.js";

let player;
let background;
let ground;
let spaceBar;

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

function preload () {

    this.load.image("player", "../assets/player.png");
    this.load.image("background", "../assets/background.png");
    this.load.image("ground", "../assets/ground.png");

}

function create () {

    background = this.add.image(0, 600, "background");
    background.setOrigin(0,1);

    player = new Player(100, 200, 64, 64, false);
    player.image = this.add.image(player.x, player.y, "player");
    player.image.setOrigin(0,1);

    ground = new Ground(0, 600, 150);
    ground.image = this.add.image(ground.x, ground.y, "ground");
    ground.image.setOrigin(0,1);

    spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

}

function update() {

    if (spaceBar.isDown) {

        player.onSpaceDown();

    }

    player.update(ground);

}

var game = new Phaser.Game(config);