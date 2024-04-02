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
    this.load.spritesheet('Butterfly', 'assets/Butterfly.png',{ frameWidth:64, frameHeight:64})
    this.load.spritesheet('Snail', 'assets/Snail.png',{ frameWidth:64, frameHeight:64})

  
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
    let Snail1 = map.findObject("objectLayer1", (obj) => obj.name === "Snail1"); 
    let Snail2 = map.findObject("objectLayer1", (obj) => obj.name === "Snail2"); 
    let Snail3 = map.findObject("objectLayer1", (obj) => obj.name === "Snail3"); 
    let Snail4 = map.findObject("objectLayer1", (obj) => obj.name === "Snail4"); 
    let Snail5 = map.findObject("objectLayer1", (obj) => obj.name === "Snail5"); 
    let Snail6 = map.findObject("objectLayer1", (obj) => obj.name === "Snail6"); 
    let Snail7 = map.findObject("objectLayer1", (obj) => obj.name === "Snail7"); 
    let Snail8 = map.findObject("objectLayer1", (obj) => obj.name === "Snail8"); 

    let Butterfly1 = map.findObject("objectLayer2", (obj) => obj.name === "Butterfly1"); 
    let Butterfly2 = map.findObject("objectLayer2", (obj) => obj.name === "Butterfly2"); 
    let Butterfly3 = map.findObject("objectLayer2", (obj) => obj.name === "Butterfly3"); 
    let Butterfly4 = map.findObject("objectLayer2", (obj) => obj.name === "Butterfly4"); 
    let Butterfly5 = map.findObject("objectLayer2", (obj) => obj.name === "Butterfly5"); 
    let Butterfly6 = map.findObject("objectLayer2", (obj) => obj.name === "Butterfly6"); 
    let Butterfly7 = map.findObject("objectLayer2", (obj) => obj.name === "Butterfly7"); 
    let Butterfly8 = map.findObject("objectLayer2", (obj) => obj.name === "Butterfly8"); 

    // Add time event / movement here
    this.Snail1 = this.physics.add.sprite(Snail1.x, Snail1.y, "Snail")
    this.Snail2 = this.physics.add.sprite(Snail2.x, Snail2.y, "Snail")
    this.Snail3 = this.physics.add.sprite(Snail3.x, Snail3.y, "Snail")
    this.Snail4 = this.physics.add.sprite(Snail4.x, Snail4.y, "Snail")
    this.Snail5 = this.physics.add.sprite(Snail5.x, Snail5.y, "Snail")
    this.Snail6 = this.physics.add.sprite(Snail6.x, Snail6.y, "Snail")
    this.Snail7 = this.physics.add.sprite(Snail7.x, Snail7.y, "Snail")
    this.Snail8 = this.physics.add.sprite(Snail8.x, Snail8.y, "Snail")

    this.Butterfly1 = this.physics.add.sprite(Butterfly1.x, Butterfly1.y, "Butterfly")
    this.Butterfly2 = this.physics.add.sprite(Butterfly2.x, Butterfly2.y, "Butterfly")
    this.Butterfly3 = this.physics.add.sprite(Butterfly3.x, Butterfly3.y, "Butterfly")
    this.Butterfly4 = this.physics.add.sprite(Butterfly4.x, Butterfly4.y, "Butterfly")
    this.Butterfly5 = this.physics.add.sprite(Butterfly5.x, Butterfly5.y, "Butterfly")
    this.Butterfly6 = this.physics.add.sprite(Butterfly6.x, Butterfly6.y, "Butterfly")
    this.Butterfly7 = this.physics.add.sprite(Butterfly7.x, Butterfly7.y, "Butterfly")
    this.Butterfly8 = this.physics.add.sprite(Butterfly8.x, Butterfly8.y, "Butterfly")

    this.tweens.add({
      targets: this.Snail1,
      x: 173,
      flipX: true,
      yoyo: true,
      duration: 4000,
      repeat: -1
  })

  this.tweens.add({
    targets: this.Snail2,
    x: 727,
    flipX: true,
    yoyo: true,
    duration: 4000,
    repeat: -1
})

this.tweens.add({
  targets: this.Snail3,
  x: 186,
  flipX: true,
  yoyo: true,
  duration: 4000,
  repeat: -1
})

this.tweens.add({
  targets: this.Snail4,
  x: 693,
  flipX: true,
  yoyo: true,
  duration: 4000,
  repeat: -1
})

this.tweens.add({
  targets: this.Snail5,
  x: 250,
  flipX: true,
  yoyo: true,
  duration: 4000,
  repeat: -1
})

this.tweens.add({
  targets: this.Snail6,
  x: 650,
  flipX: true,
  yoyo: true,
  duration: 4000,
  repeat: -1
})

this.tweens.add({
  targets: this.Snail7,
  x: 797,
  flipX: true,
  yoyo: true,
  duration: 4000,
  repeat: -1
})

this.tweens.add({
  targets: this.Snail8,
  x: 722,
  flipX: true,
  yoyo: true,
  duration: 4000,
  repeat: -1
})

this.tweens.add({
  targets: this.Butterfly1,
  x: 722,
  flipX: true,
  yoyo: true,
  duration: 2000,
  repeat: -1
})

this.tweens.add({
  targets: this.Butterfly2,
  x: 679,
  flipX: true,
  yoyo: true,
  duration: 2000,
  repeat: -1
})

this.tweens.add({
  targets: this.Butterfly3,
  x: 333,
  flipX: true,
  yoyo: true,
  duration: 2000,
  repeat: -1
})

this.tweens.add({
  targets: this.Butterfly4,
  x: 700,
  flipX: true,
  yoyo: true,
  duration: 2000,
  repeat: -1
})

this.tweens.add({
  targets: this.Butterfly5,
  x: 338,
  flipX: true,
  yoyo: true,
  duration: 2000,
  repeat: -1
})

this.tweens.add({
  targets: this.Butterfly6,
  x: 618,
  flipX: true,
  yoyo: true,
  duration: 2000,
  repeat: -1
})

this.tweens.add({
  targets: this.Butterfly7,
  x: 266,
  flipX: true,
  yoyo: true,
  duration: 2000,
  repeat: -1
})

this.tweens.add({
  targets: this.Butterfly8,
  x: 722,
  flipX: true,
  yoyo: true,
  duration: 2000,
  repeat: -1
})

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
    console.log("BaileyChickenFactoryScene");
    this.BaileyChickenFactoryScene();


}
}


BaileyChickenFactoryScene(player, tile) {
  console.log("BaileyChickenFactoryScene function");
  this.scene.start("BaileyChickenFactoryScene");
}
}

//////////// end of class world ////////////////////////
