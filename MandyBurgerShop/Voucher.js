class Voucher extends Phaser.Scene {
  constructor() {
      super({ key: "Voucher" });
  }

  preload() {

      // Step 1, load JSON
      // simple Main Page image
      this.load.image("Voucherimg", "assets/Voucher.png");
      // this.load.audio("bgm", "assets/song.mp3");

  }

  create() {
      // this.music = this.sound.add("bgm", { loop: true }).setVolume(0.4);
      // this.music.play();
      this.add.image(0, 0, "Voucherimg").setOrigin(0, 0);

      var spaceDown = this.input.keyboard.addKey('SPACE');

      spaceDown.on('down', function () {
          console.log("Spacebar pressed, goto MainPage");
          this.scene.start("MainPage");
      }, this);

      // Step 2 : Preload any images here

  } // end of preload //
}