class Win extends Phaser.Scene {
  constructor() {
      super({ key: "Win" });
  }

  preload() {

      // Step 1, load JSON
      // simple Main Page image
      this.load.image("wonimg", "assets/Won.png");
      this.load.audio("Win", "assets/Win.wav");

  }

  create() {
     this.music = this.sound.add("Win").setVolume(0.4);
    this.music.play();
      this.add.image(0, 0, "wonimg").setOrigin(0, 0);

      var spaceDown = this.input.keyboard.addKey('SPACE');

      spaceDown.on('down', function () {
          console.log("Spacebar pressed, goto Voucher");
          this.scene.start("Voucher");
      }, this);

      // Step 2 : Preload any images here

  } // end of preload //
}