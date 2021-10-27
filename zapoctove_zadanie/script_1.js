// PIXI.utils.sayHello();


const app = new PIXI.Application({
    width: 1026,
    height: 1026,
    transparent: true,
    scale: 1,
    antialias: true,

});

document.body.appendChild(app.view);


app.loader.add('chrome', '512x512-png-images-9-transparent.png').load((loader, resources) => {
    const chrome = new PIXI.Sprite(resources.chrome.texture);

    chrome.scale.x -= 0.2;
    chrome.scale.y -= 0.2;

    chrome.interactive = true; //interact on click

    chrome.x = 300;
    chrome.y = app.renderer.height / 2;

    chrome.anchor.x = 0.5;
    chrome.anchor.y = 0.5;

    chrome.click = function (){ //on click scale png
        chrome.scale.x -= 0.1;
        chrome.scale.y -= 0.1;
    };

    app.stage.addChild(chrome);

    app.ticker.add(() => {
        chrome.rotation += 0.002;
    });
});

//2nd sprite

let bol = false;


const texture = PIXI.Texture.from('512x512-png-images-9-transparent.png');
const secondTexture = PIXI.Texture.from('mozilla.png');

const sprite1 = new PIXI.Sprite(texture);

sprite1.anchor.set(0.5);

sprite1.x = 800;
sprite1.y = app.screen.height / 2;

sprite1.scale.x -= 0.2;
sprite1.scale.y -= 0.2;

app.stage.addChild(sprite1);


sprite1.interactive = true;
sprite1.buttonMode = true;

sprite1.on('pointertap', () => {
    bol = !bol;
    if (bol) {
        sprite1.texture = secondTexture;
    } else {
        sprite1.texture = texture;
    }
});

app.ticker.add(() => {
    sprite1.rotation -= 0.002;
});
