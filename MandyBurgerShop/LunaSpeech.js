class LunaSpeech extends Phaser.Scene {
  constructor() {
      super({ key: "LunaSpeech" });
  }

  preload() {

      // Step 1, load JSON
      // simple Main Page image
      this.load.image("LunaSpeechimg", "assets/LunaSpeech.png");

  }

  create() {
      this.add.image(0, 0, "LunaSpeechimg").setOrigin(0, 0);

      var spaceDown = this.input.keyboard.addKey('SPACE');

      spaceDown.on('down', function () {
          console.log("Spacebar pressed, goto MissionOne");
          this.scene.start("MissionOne");
      }, this);

      // Step 2 : Preload any images here

  } // end of preload //
}