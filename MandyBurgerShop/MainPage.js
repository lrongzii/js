class MainPage extends Phaser.Scene {
  constructor() {
      super({ key: "MainPage" });
  }

  preload() {

      // Step 1, load JSON
      // simple Main Page image
      this.load.image("mainpageimg", "assets/MainPage.png");
      this.load.audio("bgmusic", "assets/Lullaby.mp3");
      // this.load.audio("bgm", "assets/song.mp3");

  }

  create() {
      // this.music = this.sound.add("bgm", { loop: true }).setVolume(0.4);
      // this.music.play();

      this.music = this.sound.add("bgmusic", { loop: true }).setVolume(0.4);
      this.music.play();

      this.add.image(0, 0, "mainpageimg").setOrigin(0, 0);

      var spaceDown = this.input.keyboard.addKey('SPACE');

      spaceDown.on('down', function () {
          console.log("Spacebar pressed, goto Storyline");
          this.scene.start("Storyline");
      }, this);

      // Step 2 : Preload any images here

  } // end of preload //
}