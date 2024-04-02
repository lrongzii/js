class Cooking extends Phaser.Scene {
  constructor() {
      super({ key: "Cooking" });
  }

  preload() {

      // Step 1, load JSON
      // simple Main Page image
      this.load.image("cookingimg", "assets/Cooking.png");
      // this.load.audio("bgm", "assets/song.mp3");

  }

  create() {
      // this.music = this.sound.add("bgm", { loop: true }).setVolume(0.4);
      // this.music.play();
      this.add.image(0, 0, "cookingimg").setOrigin(0, 0);

      var spaceDown = this.input.keyboard.addKey('SPACE');

      spaceDown.on('down', function () {
          console.log("Spacebar pressed, goto Win");
          this.scene.start("Win");
      }, this);

      // Step 2 : Preload any images here

  } // end of preload //
}