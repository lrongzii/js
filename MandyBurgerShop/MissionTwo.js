class MissionTwo extends Phaser.Scene {
  constructor() {
      super({ key: "MissionTwo" });
  }

  preload() {

      // Step 1, load JSON
      // simple Main Page image
      this.load.image("missiontwoimg", "assets/MissionTwo.png");
      // this.load.audio("bgm", "assets/song.mp3");

  }

  create() {
      // this.music = this.sound.add("bgm", { loop: true }).setVolume(0.4);
      // this.music.play();
      this.add.image(0, 0, "missiontwoimg").setOrigin(0, 0);

      var spaceDown = this.input.keyboard.addKey('SPACE');

      spaceDown.on('down', function () {
          console.log("Spacebar pressed, goto EzraLettuceField");
          this.scene.start("EzraLettuceField");
      }, this);

      // Step 2 : Preload any images here

  } // end of preload //
}