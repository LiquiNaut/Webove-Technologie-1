const app = new PIXI.Application({
    backgroundColor: 0x1099bb,
    width: 1920,
    height: 1065,
});

document.body.appendChild(app.view);


const texture = PIXI.Texture.from('minecraft.png');


texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;

//generate sprites
for (let i = 0; i < 20; i++) {
    createTexture(Math.floor(Math.random() * app.screen.width),Math.floor(Math.random() * app.screen.height));
}

function createTexture(x, y) {
    const minecraftTexture = new PIXI.Sprite(texture);

    minecraftTexture.interactive = true;
    minecraftTexture.buttonMode = true;

    minecraftTexture.anchor.set(0.5);

    minecraftTexture
        .on('pointerdown', onDragStart)
        .on('pointerup', onDragEnd)
        .on('pointerupoutside', onDragEnd)
        .on('pointermove', onDragMove);

    minecraftTexture.x = x;
    minecraftTexture.y = y;

       app.stage.addChild(minecraftTexture);
}

function onDragStart(event) {
    this.data = event.data;
    this.alpha = 0.5;
    this.dragging = true;
}

function onDragEnd() {
    this.alpha = 1;
    this.dragging = false;
    this.data = null;
}

function onDragMove() {
    if (this.dragging) {
        const newPosition = this.data.getLocalPosition(this.parent);
        this.x = newPosition.x;
        this.y = newPosition.y;
    }
}
