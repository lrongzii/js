
let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    backgroundColor: '#000000',
    scene: [ MandyBurgerShop , BigWorld , BigWorld2 , BigWorld3 , BigWorld4 , LunaMilkFarm , EzraLettuceField , BaileyChickenFactory , Cave]

};

let game = new Phaser.Game(config);