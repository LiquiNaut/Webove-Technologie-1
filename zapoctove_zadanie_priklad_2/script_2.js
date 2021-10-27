const app = new PIXI.Application({
    backgroundColor: 0xFF0000, // 0xC0C0C0 - šedá
    width: 1920,
    height: 1065,

});

document.body.appendChild(app.view);


//text 1

const normaltext = new PIXI.TextStyle({
    fontSize: 60,
});

const basicText = new PIXI.Text('Klasický text v pixi.js', normaltext);
basicText.x = 1500;
basicText.y = 350;

basicText.skew.set(0.3, +0.5);
basicText.anchor.set(0.5, 0.5);

app.stage.addChild(basicText);

//text 2
const style = new PIXI.TextStyle({
    fontFamily: 'Didot',
    fontSize: 60,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fill: ['#FF0000','#FFA500', '#FFFF00'], // gradient
    stroke: '#4a1850',
    strokeThickness: 10,
    lineHeight: 60,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 20,
    wordWrap: true,
    wordWrapWidth: 800,
    lineJoin: 'round',
});

const richText = new PIXI.Text('Druhý príklad na super knižnicu PIXI.js', style);
richText.x = 750;
richText.y = 500;

app.stage.addChild(richText);


//text 3
const skewStyle = new PIXI.TextStyle({
    fontFamily: 'Bradley Hand',
    dropShadow: true,
    dropShadowAlpha: 0.8,
    dropShadowAngle: 2.1,
    dropShadowBlur: 4,
    dropShadowColor: "0xC0C0C0",
    dropShadowDistance: 10,
    fill: ['#50C29A', '#79E734', '#003500'],
    stroke: '#62643D',
    fontSize: 80,
    fontWeight: "lighter",
    lineJoin: "round",
    strokeThickness: 20
});

const skewText = new PIXI.Text('Take me back to school...', skewStyle);
skewText.x = 400;
skewText.y = 850;

skewText.skew.set(0.1,-0.4);   //skreslenie - default (1,1)
skewText.anchor.set(0.5, 0.5);

app.stage.addChild(skewText);
