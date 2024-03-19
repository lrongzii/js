class BigWorld extends Phaser.Scene {
  constructor() {
    super({
      key: "BigWorld",
    });

    // Put global variable here
  }

  preload() {
    // Step 1, load JSON
    this.load.tilemapTiledJSON("BigWorld", "assets/BigWorld.tmj");

    // Step 2 : Preload any images here
    this.load.image("Campingimg", "assets/11_Camping_32x32.png");
    this.load.image("Buildingsimg", "assets/5_Floor_Modular_Buildings_32x32.png");
    this.load.image("Villasimg", "assets/7_Villas_32x32.png");
    this.load.image("Worksiteimg", "assets/8_Worksite_32x32.png");
    this.load.image("Fencesimg", "assets/Fences.png");
    this.load.image("Grassimg", "assets/Grass.png");
    this.load.image("Streetimg", "assets/Street32x32.png");

    this.load.spritesheet('gen', 'assets/gen.png',{ frameWidth:64, frameHeight:64})
  }

  create() {
    console.log("BigWorld");

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
    let map = this.make.tilemap({ key: "BigWorld" });

    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
    let CampingTiles = map.addTilesetImage("11_Camping_32x32", "Campingimg");
    let BuildingsTiles = map.addTilesetImage("5_Floor_Modular_Buildings_32x32", "Buildingsimg");
    let VillasTiles = map.addTilesetImage("7_Villas_32x32", "Villasimg");
    let WorksiteTiles = map.addTilesetImage("8_Worksite_32x32", "Worksiteimg");
    let FencesTiles = map.addTilesetImage("Fences", "Fencesimg");
    let GrassTiles = map.addTilesetImage("Grass", "Grassimg");
    let StreetTiles = map.addTilesetImage("Street32x32", "Streetimg");

    //let streetTiles = map.addTilesetImage("Street32x32", "street");

    // Step 5  create an array of tiles
     let tilesArray = [
      CampingTiles,
      BuildingsTiles,
      VillasTiles,
      WorksiteTiles,
      FencesTiles,
      GrassTiles,
      StreetTiles,
    ];

    // Step 6  Load in layers by layers
    this.BlockLayer = map.createLayer("Block",tilesArray,0,0);
    this.GrassLayer = map.createLayer("Grass",tilesArray,0,0);
    this.WaterLayer = map.createLayer("Water",tilesArray,0,0);
    this.ShipLayer = map.createLayer("Ship",tilesArray,0,0);
    this.RoadLayer = map.createLayer("Road",tilesArray,0,0);
    this.DecoLayer = map.createLayer("Deco",tilesArray,0,0);
    this.BurgerShopLayer = map.createLayer("BurgerShop",tilesArray,0,0);
    this.ChickenFarmLayer = map.createLayer("ChickenFarm",tilesArray,0,0);
    this.LettuceFarmLayer = map.createLayer("LettuceFarm",tilesArray,0,0);
    this.CowFarmLayer = map.createLayer("CowFarm",tilesArray,0,0);

    // Add main player here with physics.add.sprite

    // Add time event / movement here

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
        var key2Down = this.input.keyboard.addKey(51);
        var key3Down = this.input.keyboard.addKey(52);
        var key4Down = this.input.keyboard.addKey(53);
        var key5Down = this.input.keyboard.addKey(54);

        key1Down.on('down', function(){
            console.log("Key 1 pressed");
                this.scene.start("MandyBurgerShop");
            }, this );

            key2Down.on('down', function(){
                console.log("Key 3 pressed");
                    this.scene.start("LunaMilkFarm");
                }, this );

                key3Down.on('down', function(){
                  console.log("Key 4 pressed");
                      this.scene.start("EzraLettuceField");
            },this);

            key4Down.on('down', function(){
              console.log("Key 5 pressed");
                  this.scene.start("BaileyChickenFactory");
        },this);

        key5Down.on('down', function(){
          console.log("Key 6 pressed");
              this.scene.start("Cave");
    },this);

            this.player = this.physics.add.sprite(250, 376, 'gen');
        window.player = this.player
       
        // create the arrow keys
        this.cursors = this.input.keyboard.createCursorKeys();
        
        // // camera follow player
        this.cameras.main.startFollow(this.player);

        this.player.body
        .setSize(this.player.width * 0.55, this.player.height * 0.4)
        .setOffset(15,40)

        this.BlockLayer.setCollisionByExclusion(-1, true);
        this.physics.add.collider(this.player, this.BlockLayer)
      //this.cursors = this.input.keyboard.createCursorKeys();
          }
    // camera follow player

    
    //this.cameras.main.startFollow(this.player);

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
      this.player.x > 741 &&
      this.player.x < 811 &&
      this.player.y < 418
  
    ) {
      console.log("LunaMilkFarm");
      this.LunaMilkFarm();

  
  }
  }
  
  LunaMilkFarm(player, tile) {
    console.log("LunaMilkFarm function");
    this.scene.start("LunaMilkFarm");
  }
  }
  /////////////////// end of create //////////////////////////////
 /////////////////// end of update //////////////////////////////
 //////////// end of class world ////////////////////////
