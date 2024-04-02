class GameOverBailey extends Phaser.Scene {
  constructor() {
      super({ key: "GameOverBailey" });
  }

  preload() {

      // Step 1, load JSON
      // simple Main Page image
      this.load.image("gameoverimg", "assets/GameOver.png");
      this.load.audio("GameOver", "assets/GameOver.wav");

  }

  create() {
      this.music = this.sound.add("GameOver").setVolume(0.4);
      this.music.play();
      this.add.image(0, 0, "gameoverimg").setOrigin(0, 0);

      var spaceDown = this.input.keyboard.addKey('SPACE');

      spaceDown.on('down', function () {
          console.log("Spacebar pressed, goto MissionThree");
          this.scene.start("MissionThree");
      }, this);

      // Step 2 : Preload any images here

  } // end of preload //
}