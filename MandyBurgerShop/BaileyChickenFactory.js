class BaileyChickenFactory extends Phaser.Scene {
  constructor() {
    super({
      key: "BaileyChickenFactory",
    });

    // Put global variable here
  }

  preload() {
    // Step 1, load JSON
    this.load.tilemapTiledJSON("BaileyChickenFactory", "assets/BaileyChickenFactory.tmj");
    this.load.audio("collectsound", "assets/collectsound.mp3");

    // Step 2 : Preload any images here
    this.load.image("Campingimg", "assets/11_Camping_32x32.png");
    this.load.image("Villasimg", "assets/7_Villas_32x32.png");
    this.load.image("Fencesimg", "assets/Fences.png");
    this.load.image("Grassimg", "assets/Grass.png");

    this.load.spritesheet('gen', 'assets/gen.png',{ frameWidth:64, frameHeight:64})
    this.load.spritesheet('GoodChicken', 'assets/GoodChicken.png',{ frameWidth:64, frameHeight:64})
    this.load.spritesheet('BadChicken', 'assets/BadChicken.png',{ frameWidth:64, frameHeight:64})
    
  }

  create() {
    console.log("BaileyChickenFactory");

    this.music = this.sound.add("collectsound").setVolume(0.4);
    this.music.play();

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

    this.anims.create({
      key:'BadChicken-up',
      frames:this.anims.generateFrameNumbers('BadChicken',
      { start:9, end:11 }),
      frameRate:5,
      repeat:-1
  });
  
  this.anims.create({
      key:'BadChicken-left',
      frames:this.anims.generateFrameNumbers('BadChicken',
      { start:3, end:5 }),
      frameRate:5,
      repeat:-1
  });
  
  this.anims.create({
      key:'BadChicken-down',
      frames:this.anims.generateFrameNumbers('BadChicken',
      { start:0, end:2 }),
      frameRate:5,
      repeat:-1
  });
  
  this.anims.create({
      key:'BadChicken-right',
      frames:this.anims.generateFrameNumbers('BadChicken',
      { start:6, end:8 }),
      frameRate:5,
      repeat:-1
  });

  this.anims.create({
    key: 'GoodChickenAnim', // Unique identifier for the animation
    frames: this.anims.generateFrameNumbers('GoodChicken', { start: 0, end: 2 }), // Frame numbers or array of frame numbers
    frameRate: 10, // Number of frames per second
    repeat: -1 // -1 for infinite loop, or set to a positive integer for a finite loop
});

    //Step 3 - Create the map from main
    let map = this.make.tilemap({ key: "BaileyChickenFactory" });

    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
    let CampingTiles = map.addTilesetImage("11_Camping_32x32", "Campingimg");
    let VillasTiles = map.addTilesetImage("7_Villas_32x32", "Villasimg");
    let FencesTiles = map.addTilesetImage("Fences", "Fencesimg");
    let GrassTiles = map.addTilesetImage("Grass", "Grassimg");

    //let streetTiles = map.addTilesetImage("Street32x32", "street");

    // Step 5  create an array of tiles
     let tilesArray = [
      CampingTiles,
      VillasTiles,
      FencesTiles,
      GrassTiles,
    ];

    // Step 6  Load in layers by layers
    this.BlockLayer = map.createLayer("Block",tilesArray,0,0);
    this.FloorLayer = map.createLayer("Floor",tilesArray,0,0);
    this.HouseLayer = map.createLayer("House",tilesArray,0,0);
    this.TreeLayer = map.createLayer("Tree",tilesArray,0,0);

     // load checklist layer
    let BadChicken1 = map.findObject("objectLayer2", (obj) => obj.name === "BadChicken1"); 
    let BadChicken2 = map.findObject("objectLayer2", (obj) => obj.name === "BadChicken2");
    let BadChicken3 = map.findObject("objectLayer2", (obj) => obj.name === "BadChicken3");
    let BadChicken4 = map.findObject("objectLayer2", (obj) => obj.name === "BadChicken4");
    let BadChicken5 = map.findObject("objectLayer2", (obj) => obj.name === "BadChicken5");
    let BadChicken6 = map.findObject("objectLayer2", (obj) => obj.name === "BadChicken6");
    let BadChicken7 = map.findObject("objectLayer2", (obj) => obj.name === "BadChicken7");
    let BadChicken8 = map.findObject("objectLayer2", (obj) => obj.name === "BadChicken8");
    let BadChicken9 = map.findObject("objectLayer2", (obj) => obj.name === "BadChicken9");
    let BadChicken10 = map.findObject("objectLayer2", (obj) => obj.name === "BadChicken10");

    let GoodChicken1 = map.findObject("objectLayer1", (obj) => obj.name === "GoodChicken1"); 
    let GoodChicken2 = map.findObject("objectLayer1", (obj) => obj.name === "GoodChicken2");
    let GoodChicken3 = map.findObject("objectLayer1", (obj) => obj.name === "GoodChicken3");
    let GoodChicken4 = map.findObject("objectLayer1", (obj) => obj.name === "GoodChicken4");
    let GoodChicken5 = map.findObject("objectLayer1", (obj) => obj.name === "GoodChicken5");
    let GoodChicken6 = map.findObject("objectLayer1", (obj) => obj.name === "GoodChicken6");
    let GoodChicken7 = map.findObject("objectLayer1", (obj) => obj.name === "GoodChicken7");
    let GoodChicken8 = map.findObject("objectLayer1", (obj) => obj.name === "GoodChicken8");
    let GoodChicken9 = map.findObject("objectLayer1", (obj) => obj.name === "GoodChicken9");
    let GoodChicken10 = map.findObject("objectLayer1", (obj) => obj.name === "GoodChicken10");

    this.BadChicken1 = this.physics.add.sprite(BadChicken1.x, BadChicken1.y, "BadChicken").play("BadChicken-left")
    this.BadChicken2 = this.physics.add.sprite(BadChicken2.x, BadChicken2.y, "BadChicken").play("BadChicken-right")
    this.BadChicken3 = this.physics.add.sprite(BadChicken3.x, BadChicken3.y, "BadChicken").play("BadChicken-left")
    this.BadChicken4 = this.physics.add.sprite(BadChicken4.x, BadChicken4.y, "BadChicken").play("BadChicken-right")
    this.BadChicken5 = this.physics.add.sprite(BadChicken5.x, BadChicken5.y, "BadChicken").play("BadChicken-left")
    this.BadChicken6 = this.physics.add.sprite(BadChicken6.x, BadChicken6.y, "BadChicken").play("BadChicken-right")
    this.BadChicken7 = this.physics.add.sprite(BadChicken7.x, BadChicken7.y, "BadChicken").play("BadChicken-left")
    this.BadChicken8 = this.physics.add.sprite(BadChicken8.x, BadChicken8.y, "BadChicken").play("BadChicken-right")
    this.BadChicken9 = this.physics.add.sprite(BadChicken9.x, BadChicken9.y, "BadChicken").play("BadChicken-left")
    this.BadChicken10 = this.physics.add.sprite(BadChicken10.x, BadChicken10.y, "BadChicken").play("BadChicken-right")

    this.GoodChicken1 = this.physics.add.sprite(GoodChicken1.x, GoodChicken1.y, "GoodChicken").play("GoodChickenAnim")
    this.GoodChicken2 = this.physics.add.sprite(GoodChicken2.x, GoodChicken2.y, "GoodChicken").play("GoodChickenAnim")
    this.GoodChicken3 = this.physics.add.sprite(GoodChicken3.x, GoodChicken3.y, "GoodChicken").play("GoodChickenAnim")
    this.GoodChicken4 = this.physics.add.sprite(GoodChicken4.x, GoodChicken4.y, "GoodChicken").play("GoodChickenAnim")
    this.GoodChicken5 = this.physics.add.sprite(GoodChicken5.x, GoodChicken5.y, "GoodChicken").play("GoodChickenAnim")
    this.GoodChicken6 = this.physics.add.sprite(GoodChicken6.x, GoodChicken6.y, "GoodChicken").play("GoodChickenAnim")
    this.GoodChicken7 = this.physics.add.sprite(GoodChicken7.x, GoodChicken7.y, "GoodChicken").play("GoodChickenAnim")
    this.GoodChicken8 = this.physics.add.sprite(GoodChicken8.x, GoodChicken8.y, "GoodChicken").play("GoodChickenAnim")
    this.GoodChicken9 = this.physics.add.sprite(GoodChicken9.x, GoodChicken9.y, "GoodChicken").play("GoodChickenAnim")
    this.GoodChicken10 = this.physics.add.sprite(GoodChicken10.x, GoodChicken10.y, "GoodChicken").play("GoodChickenAnim")

    
    // Add main player here with physics.add.sprite
    // Add time event / movement her

    // get the tileIndex number in json, +1
    //mapLayer.setTileIndexCallback(11, this.room1, this);

    // Add custom properties in Tiled called "mouintain" as bool

    // What will collider witg what layers
    //this.physics.add.collider(mapLayer, this.player);

    // create the arrow keys

    console.log("This is preloadScene spacebar V3");

    var spaceDown = this.input.keyboard.addKey('SPACE');
        
    spaceDown.on('down', function(){
      console.log("Space pressed, goto farm");
      this.scene.start("farm");
    }, this );

    var key1Down = this.input.keyboard.addKey(49);
    var key2Down = this.input.keyboard.addKey(50);
    var key3Down = this.input.keyboard.addKey(51);
    var key4Down = this.input.keyboard.addKey(52);
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
    }, this );

    key4Down.on('down', function(){
      console.log("Key 4 pressed");
      this.scene.start("EzraLettuceField");
    },this);

    key5Down.on('down', function(){
      console.log("Key 6 pressed");
      this.scene.start("Cave");
    },this);


    this.player = this.physics.add.sprite(500, 500, 'gen');
    window.player = this.player
   
    // create the arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();
    
    // // camera follow player
    this.physics.add.overlap(this.player, [this.GoodChicken1,this.GoodChicken2, this.GoodChicken3,this.GoodChicken4,this.GoodChicken5,this.GoodChicken6,this.GoodChicken7,this.GoodChicken8,this.GoodChicken9,this.GoodChicken10] ,this.collectChicken, null, this);
    this.physics.add.overlap(this.player,[this.BadChicken1,this.BadChicken2,this.BadChicken3,this.BadChicken4,this.BadChicken5,this.BadChicken6,this.BadChicken7,this.BadChicken8,this.BadChicken9,this.BadChicken10] ,this.hitChicken,null,this);
    this.cameras.main.startFollow(this.player);

    this.player.body
    .setSize(this.player.width * 0.55, this.player.height * 0.4)
    .setOffset(15,40);

    this.BlockLayer.setCollisionByExclusion(-1, true);
        this.physics.add.collider(this.player, this.BlockLayer)
  }

  update() {

    this.physics.moveToObject(this.BadChicken1,this.player, 100, 4500);
    this.physics.moveToObject(this.BadChicken2,this.player, 100, 4700);
    this.physics.moveToObject(this.BadChicken3,this.player, 100, 4900);
    this.physics.moveToObject(this.BadChicken4,this.player, 200, 5000);
    this.physics.moveToObject(this.BadChicken5,this.player, 200, 5200);
    this.physics.moveToObject(this.BadChicken6,this.player, 200, 5400);
    this.physics.moveToObject(this.BadChicken7,this.player, 250, 5600);
    this.physics.moveToObject(this.BadChicken8,this.player, 100, 5800);
    this.physics.moveToObject(this.BadChicken9,this.player, 150, 6000);
    this.physics.moveToObject(this.BadChicken10,this.player, 100, 6300);

    if (this.cursors.left.isDown) {
        this.player.setVelocityX(-160);
        this.player.anims.play('gen-left', true);
    } else if (this.cursors.right.isDown) {
        this.player.setVelocityX(160);
        this.player.anims.play('gen-right', true);
    } else if (this.cursors.up.isDown) {
        this.player.setVelocityY(-160);
        this.player.anims.play('gen-up', true);
    } else if (this.cursors.down.isDown) {
        this.player.setVelocityY(160);
        this.player.anims.play('gen-down', true);
    } else {
        this.player.setVelocity(0);
        this.player.anims.stop();
    }
    if (
      this.player.x < 91 &&
      this.player.y > 574 &&
      this.player.y < 689 &&
      window.Chicken > 9

  
    ) {
      console.log("MandyBurgerShopScene");
      this.MandyBurgerShopScene();
  
  }
  }

  collectChicken(player, item) {
    console.log("collectChicken");
    this.music.play();
    window.Chicken++
    console.log(window.Chicken)
    item.disableBody(true, true); // remove fire
    return false;
  }

  hitChicken(player, item) {
    console.log("hitChicken");
    this.cameras.main.shake(200);
    this.scene.start("GameOver")
    return false;
  }
  
  MandyBurgerShopScene(player, tile) {
    console.log("MandyBurgerShopScene");
    this.scene.start("MandyBurgerShopScene");
  }
  }

 /////////////////// end of create //////////////////////////////
 /////////////////// end of update //////////////////////////////
 //////////// end of class world ////////////////////////
