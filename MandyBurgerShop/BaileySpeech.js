class BaileySpeech extends Phaser.Scene {
  constructor() {
      super({ key: "BaileySpeech" });
  }

  preload() {

      // Step 1, load JSON
      // simple Main Page image
      this.load.image("BaileySpeechimg", "assets/BaileySpeech.png");

  }

  create() {
      this.add.image(0, 0, "BaileySpeechimg").setOrigin(0, 0);

      var spaceDown = this.input.keyboard.addKey('SPACE');

      spaceDown.on('down', function () {
          console.log("Spacebar pressed, goto MissionThree");
          this.scene.start("MissionThree");
      }, this);

      // Step 2 : Preload any images here

  } // end of preload //
}