class BaileyChickenFactoryScene extends Phaser.Scene {
  constructor() {
      super({ key: "BaileyChickenFactoryScene" });
  }

  preload() {

      // Step 1, load JSON
      // simple Main Page image
      this.load.image("BaileyChickenFactoryimg", "assets/BaileyChickenFactory.png");
      // this.load.audio("bgm", "assets/song.mp3");

  }

  create() {
      // this.music = this.sound.add("bgm", { loop: true }).setVolume(0.4);
      // this.music.play();
      this.add.image(0, 0, "BaileyChickenFactoryimg").setOrigin(0, 0);

      var spaceDown = this.input.keyboard.addKey('SPACE');

      spaceDown.on('down', function () {
          console.log("Spacebar pressed, goto BigWorld3");
          this.scene.start("BigWorld3");
      }, this);

      // Step 2 : Preload any images here

  } // end of preload //
}