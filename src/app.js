var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

function preload ()
{
}

function create ()
{
}

var game = new Phaser.Game(config);