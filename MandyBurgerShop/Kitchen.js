class Kitchen extends Phaser.Scene {
  constructor() {
      super({ key: "Kitchen" });
  }

  preload() {

      // Step 1, load JSON
      // simple Main Page image
      this.load.image("kitchenimg", "assets/Kitchen.png");
      // this.load.audio("bgm", "assets/song.mp3");

  }

  create() {
      // this.music = this.sound.add("bgm", { loop: true }).setVolume(0.4);
      // this.music.play();
      this.add.image(0, 0, "kitchenimg").setOrigin(0, 0);

      var spaceDown = this.input.keyboard.addKey('SPACE');

      spaceDown.on('down', function () {
          console.log("Spacebar pressed, goto MandyBurgerShop2");
          this.scene.start("MandyBurgerShop2");
      }, this);

      // Step 2 : Preload any images here

  } // end of preload //
}