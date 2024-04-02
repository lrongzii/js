class EzraSpeech extends Phaser.Scene {
  constructor() {
      super({ key: "EzraSpeech" });
  }

  preload() {

      // Step 1, load JSON
      // simple Main Page image
      this.load.image("EzraSpeechimg", "assets/EzraSpeech.png");

  }

  create() {
      this.add.image(0, 0, "EzraSpeechimg").setOrigin(0, 0);

      var spaceDown = this.input.keyboard.addKey('SPACE');

      spaceDown.on('down', function () {
          console.log("Spacebar pressed, goto MissionTwo");
          this.scene.start("MissionTwo");
      }, this);

      // Step 2 : Preload any images here

  } // end of preload //
}