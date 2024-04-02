
let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    backgroundColor: '#ffd8e1',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
       },
    scene: [ MainPage, Storyline, GamePlay, Intro, MandyBurgerShop ,MissionOne,LunaMilkFarmScene, BigWorld ,Win,Voucher, 
        GameOverLuna,GameOverBailey,Kitchen, Prepare,Cooking,EzraLettuceFieldScene,MandyBurgerShopScene, MissionTwo,BaileyChickenFactoryScene, MissionTwoRule,
        MissionThree, BigWorld2 , BigWorld3 , BigWorld4 , LunaMilkFarm , EzraLettuceField , BaileyChickenFactory ,  MandyBurgerShop2,
        LunaSpeech,BaileySpeech,EzraSpeech]
    
};

let game = new Phaser.Game(config);
 window.Milk=0
 window.Chicken=0
 window.Cow=0
 window.Life=0
 window.attack=0
 window.Snail=8