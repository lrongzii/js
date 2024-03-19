class EzraLettuceField extends Phaser.Scene {
  constructor() {
    super({
      key: "EzraLettuceField",
    });

    // Put global variable here
  }

  preload() {
    // Step 1, load JSON
    this.load.tilemapTiledJSON("EzraLettuceField", "assets/EzraLettuceField.tmj");

    // Step 2 : Preload any images here
    this.load.image("Villasimg", "assets/7_Villas_32x32.png");
    this.load.image("Grassimg", "assets/Grass.png");

    this.load.spritesheet('gen', 'assets/gen.png',{ frameWidth:64, frameHeight:64})
  }

  create() {
    console.log("EzraLettuceField");

    this.anims.create({
      key:'gen-up',
      frames:this.anims.generateFrameNumbers('gen',
      { start:105, end:112 }),
      frameRate:5,
      repeat:-1
  });

  this.anims.create({
      key:'gen-left',
      frames:this.anims.generateFrameNumbers('gen',
      { start:118, end:125 }),
      frameRate:5,
      repeat:-1
  });

  this.anims.create({
      key:'gen-down',
      frames:this.anims.generateFrameNumbers('gen',
      { start:131, end:138 }),
      frameRate:5,
      repeat:-1
  });

  this.anims.create({
      key:'gen-right',
      frames:this.anims.generateFrameNumbers('gen',
      { start:144, end:151 }),
      frameRate:5,
      repeat:-1
  });

    //Step 3 - Create the map from main
    let map = this.make.tilemap({ key: "EzraLettuceField" });

    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
    let VillasTiles = map.addTilesetImage("7_Villas_32x32", "Villasimg");
    let GrassTiles = map.addTilesetImage("Grass", "Grassimg");

    //let streetTiles = map.addTilesetImage("Street32x32", "street");

    // Step 5  create an array of tiles
     let tilesArray = [
      VillasTiles,
      GrassTiles,

    ];

    // Step 6  Load in layers by layers
    this.BlockLayer = map.createLayer("Block",tilesArray,0,0);
    this.GrassLayer = map.createLayer("Grass",tilesArray,0,0);
    this.BarnHouseLayer = map.createLayer("Barn House",tilesArray,0,0);
    this.LettuceLayer = map.createLayer("Lettuce",tilesArray,0,0);
    this.TreeLayer = map.createLayer("Tree",tilesArray,0,0);

    // Add main player here with physics.add.sprite

    // Add time event / movement here

    // get the tileIndex number in json, +1
    //mapLayer.setTileIndexCallback(11, this.room1, this);

    // Add custom properties in Tiled called "mouintain" as bool

    // What will collider witg what layers
    //this.physics.add.collider(mapLayer, this.player);

    // create the arrow keys

    this.cursors = this.input.keyboard.createCursorKeys();

    console.log("This is preloadScene spacebar V3");

        var key1Down = this.input.keyboard.addKey(49);
        var key2Down = this.input.keyboard.addKey(50);
        var key3Down = this.input.keyboard.addKey(51);
        var key4Down = this.input.keyboard.addKey(53);
        var key5Down = this.input.keyboard.addKey(54);

        key1Down.on('down', function(){
            console.log("Key 1 pressed");
                this.scene.start("MandyBurgerShop");
            }, this );

            key2Down.on('down', function(){
                console.log("Key 2 pressed");
                    this.scene.start("BigWorld");
                }, this );

                key3Down.on('down', function(){
                  console.log("Key 3 pressed");
                      this.scene.start("LunaMilkFarm");
            },this);

            key4Down.on('down', function(){
              console.log("Key 5 pressed");
                  this.scene.start("BaileyChickenFactory");
        },this);

        key5Down.on('down', function(){
          console.log("Key 6 pressed");
              this.scene.start("Cave");
    },this);

            this.player = this.physics.add.sprite(128, 227, 'gen'); 
        window.player = this.player
       
        // create the arrow keys
        this.cursors = this.input.keyboard.createCursorKeys();
        
        // // camera follow player
        this.cameras.main.startFollow(this.player);

        this.player.body
        .setSize(this.player.width * 0.55, this.player.height * 0.4)
        .setOffset(15,40)

    //this.cursors = this.input.keyboard.createCursorKeys();

    // camera follow player
    this.cameras.main.startFollow(this.player);

    this.BlockLayer.setCollisionByExclusion(-1, true);
        this.physics.add.collider(this.player, this.BlockLayer)
  } /////////////////// end of create //////////////////////////////

  update() {
    if (this.cursors.left.isDown)
    {
        this.player.setVelocityX(-160);
        this.player.anims.play('gen-left', true);
    }
    else if (this.cursors.right.isDown)
    {
        this.player.setVelocityX(160);
        this.player.anims.play('gen-right', true);
    } else if (this.cursors.up.isDown)
    {
        this.player.setVelocityY(-160);
        this.player.anims.play('gen-up', true);
    } else if (this.cursors.down.isDown)
    {
        this.player.setVelocityY(160);
        this.player.anims.play('gen-down', true);
    } else {
        this.player.setVelocity(0);
        this.player.anims.stop();
    }
  

  if (
    this.player.x > 381 &&
    this.player.x < 480 &&
    this.player.y < 194

  ) {
    console.log("BigWorld3");
    this.BigWorld3();


}
}

BigWorld3(player, tile) {
  console.log("BigWorld3 function");
  this.scene.start("BigWorld3");
}
}

//////////// end of class world ////////////////////////
