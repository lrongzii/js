class MandyBurgerShop extends Phaser.Scene {
  constructor() {
    super({
      key: "MandyBurgerShop",
    });

    // Put global variable here
  }

  preload() {
    // Step 1, load JSON
    this.load.tilemapTiledJSON("MandyBurgerShop", "assets/MandyBurgerShop.tmj");

    // Step 2 : Preload any images here
    this.load.image("tilesetimg", "assets/tileset.png");

    this.load.spritesheet("gen", "assets/gen.png", {
      frameWidth: 64,
      frameHeight: 64,
    });
  }

  create() {
    console.log("MandyBurgerShop");

    this.anims.create({
      key: "gen-up",
      frames: this.anims.generateFrameNumbers("gen", { start: 105, end: 112 }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "gen-left",
      frames: this.anims.generateFrameNumbers("gen", { start: 118, end: 125 }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "gen-down",
      frames: this.anims.generateFrameNumbers("gen", { start: 131, end: 138 }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "gen-right",
      frames: this.anims.generateFrameNumbers("gen", { start: 144, end: 151 }),
      frameRate: 5,
      repeat: -1,
    });

    //Step 3 - Create the map from main
    let map = this.make.tilemap({ key: "MandyBurgerShop" });

    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
    let tilesetTiles = map.addTilesetImage("tileset", "tilesetimg");

    // Step 5  create an array of tiles
    let tilesArray = [tilesetTiles];

    // Step 6  Load in layers by layers
    this.BlockLayer = map.createLayer("Block", tilesArray, 0, 0);
    this.FloorLayer = map.createLayer("Floor", tilesArray, 0, 0);
    this.Floor2Layer = map.createLayer("Floor2", tilesArray, 0, 0);
    this.WallLayer = map.createLayer("Wall", tilesArray, 0, 0);
    this.WindowLayer = map.createLayer("Window", tilesArray, 0, 0);
    this.FurnitureLayer = map.createLayer("Furniture", tilesArray, 0, 0);
    this.Furniture2Layer = map.createLayer("Furniture2", tilesArray, 0, 0);

    this.cursors = this.input.keyboard.createCursorKeys();

    console.log("This is preloadScene spacebar V3");

    var key1Down = this.input.keyboard.addKey(50);
    var key2Down = this.input.keyboard.addKey(51);
    var key3Down = this.input.keyboard.addKey(52);
    var key4Down = this.input.keyboard.addKey(53);
    var key5Down = this.input.keyboard.addKey(54);

    key1Down.on(
      "down",
      function () {
        console.log("Key 2 pressed");
        this.scene.start("BigWorld");
      },
      this
    );

    key2Down.on(
      "down",
      function () {
        console.log("Key 3 pressed");
        this.scene.start("LunaMilkFarm");
      },
      this
    );

    key3Down.on(
      "down",
      function () {
        console.log("Key 4 pressed");
        this.scene.start("EzraLettuceField");
      },
      this
    );

    key4Down.on(
      "down",
      function () {
        console.log("Key 5 pressed");
        this.scene.start("BaileyChickenFactory");
      },
      this
    );

    key5Down.on(
      "down",
      function () {
        console.log("Key 6 pressed");
        this.scene.start("Cave");
      },
      this
    );

    this.player = this.physics.add.sprite(825, 182, "gen");
    window.player = this.player;

    this.cursors = this.input.keyboard.createCursorKeys();

    // camera follow player
    this.cameras.main.startFollow(this.player);

    this.player.body
      .setSize(this.player.width * 0.55, this.player.height * 0.4)
      .setOffset(15, 40);

    this.BlockLayer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.BlockLayer);
  }

  update() {
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160);
      this.player.anims.play("gen-left", true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160);
      this.player.anims.play("gen-right", true);
    } else if (this.cursors.up.isDown) {
      this.player.setVelocityY(-160);
      this.player.anims.play("gen-up", true);
    } else if (this.cursors.down.isDown) {
      this.player.setVelocityY(160);
      this.player.anims.play("gen-down", true);
    } else {
      this.player.setVelocity(0);
      this.player.anims.stop();
    }

    if (
      this.player.x > 190 &&
      this.player.x < 248 &&
      this.player.y < 130

    ) {
      console.log("BigWorld");
      this.BigWorld();

}
}

  BigWorld(player, tile) {
    console.log("BigWorld function");
    this.scene.start("BigWorld");
  }
}
//////////// end of class world ////////////////////////
