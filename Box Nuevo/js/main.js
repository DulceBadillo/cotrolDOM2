var shiftRightButton = document.querySelector('#shiftRightButton');
var shiftRightInput = document.querySelector('#shiftRightInput');
var shiftDownButton = document.querySelector('#shiftDownButton');
var shiftDownInput = document.querySelector('#shiftDownInput');
var blurButton = document.querySelector('#blurButton');
var blurInput = document.querySelector('#blurInput');
var spreadButton = document.querySelector('#spreadButton');
var spreadInput = document.querySelector('#spreadInput');
var opacityButton = document.querySelector('#opacityButton');
var opacityInput = document.querySelector('#opacityInput');
var inset = document.querySelector('#inset');
var pickerColor = document.querySelector('#pickerColor');
var preview = document.querySelector('#preview');
var textArea = document.querySelector('#textArea');
shiftRightButton.addEventListener('click', function(){
    shiftRightInput.value = 0;
    changeBoxShadow();
});

shiftDownButton.addEventListener('click', function(){
   shiftDownInput.value = 0;
   changeBoxShadow();
});

spreadButton.addEventListener('click', function(){
    spreadInput.value = 0;
    changeBoxShadow();
});

blurButton.addEventListener('click', function(){
    blurInput.value = 0;
    changeBoxShadow();
});

opacityButton.addEventListener('click', function(){
    opacityInput.value = 1;
    changeBoxShadow();
});

shiftRightInput.addEventListener('input', function(){
    changeBoxShadow();
});

shiftDownInput.addEventListener('input', function(){
    changeBoxShadow();
});

blurInput.addEventListener('input', function(){
    changeBoxShadow();
});

spreadInput.addEventListener('input', function(){
    changeBoxShadow();
});

opacityInput.addEventListener('input', function(){

});

var valueInset;

inset.addEventListener('click', function(){
    if(inset.checked){
        valueInset = true;
    }
    else{
        valueInset = false;
    }
});

pickerColor.addEventListener('input', function(){
    changeBoxShadow();
});

function changeBoxShadow(){
    var valueShiftRight = shiftRightInput.value;
    var valueShiftDown = shiftDownInput.value;
    var valueBlur = blurInput.value;
    var valueSpread = spreadInput.value;
    var valueOpacity = opacityInput.value;
    var valueColor = pickerColor.value;

    console.log(valueShiftRight);
    console.log(valueShiftDown);
    console.log(valueBlur);
    console.log(valueSpread);
    console.log(valueOpacity);
    console.log(valueColor);
    console.log(valueInset);
    if(valueInset){
        preview.style.boxShadow = `${valueShiftRight}px ${valueShiftDown}px ${valueBlur}px ${valueSpread}px ${valueColor} inset`;
        changeTextProperty();
    }
    else{
        preview.style.boxShadow = `${valueShiftRight}px ${valueShiftDown}px ${valueBlur}px ${valueSpread}px ${valueColor}`;
        changeTextProperty();
    }
}

function changeTextProperty(){
    var valueShiftRight = shiftRightInput.value;
    var valueShiftDown = shiftDownInput.value;
    var valueBlur = blurInput.value;
    var valueSpread = spreadInput.value;
    var valueOpacity = opacityInput.value;
    var valueColor = pickerColor.value;
    if(valueInset){
        textArea.value = `box-shadow: ${valueShiftRight}px ${valueShiftDown}px ${valueBlur}px ${valueSpread}px ${valueColor} inset`;
    }
    else{
        textArea.value = `box-shadow: ${valueShiftRight}px ${valueShiftDown}px ${valueBlur}px ${valueSpread}px ${valueColor}`;
    }
}
var hoverEffect = document.querySelector('.hover-effect');
var sidesEffect = document.querySelector('.sides-effect');
var buttonEffect = document.querySelector('.button-effect');
var mirrorsEffect = document.querySelector('.mirrors-effect');
var inOutEffect = document.querySelector('.inOut-effect');
var gradientEffect = document.querySelector('.gradient-effect');
var pileEffect = document.querySelector('.pile-effect');
var checkerEffect = document.querySelector('.checker-effect');
var bordersEffect = document.querySelector('.borders-effect');
var rainbowEffect = document.querySelector('.rainbow-effect');
var candyEffect = document.querySelector('.candy-effect');
var flamesEffect = document.querySelector('.flames-effect');
var candleEffect = document.querySelector('.candle-effect');
var wellEffect = document.querySelector('.well-effect');
var pyramidEffect = document.querySelector('.pyramid-effect');
var targetEffect = document.querySelector('.target-effect');

hoverEffect.addEventListener('click', function(){
    preview.style.boxShadow = "0px 10px 13px -7px #000000";
    preview.style.background = "#1C6EA4";
    preview.style.color = "white";

    textArea.value = "box-shadow: 0px 10px 13px -7px #000000";
});

sidesEffect.addEventListener('click', function(){
    preview.style.boxShadow = "-10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000";
    preview.style.background = "#1C6EA4";
    preview.style.color = "white";

    textArea.value = "box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000";
});

buttonEffect.addEventListener('click', function(){
    preview.style.boxShadow = "inset -1px 3px 8px 5px #1F87FF, 2px 5px 16px 0px #0B325E"; 
    preview.style.background = "#1C6EA4";
    preview.style.color = "white";

    textArea.value = "box-shadow: inset -1px 3px 8px 5px #1F87FF, 2px 5px 16px 0px #0B325E";
});

mirrorsEffect.addEventListener('click', function(){
    preview.style.boxShadow = "inset 2px 2px 2px 2px #1C6EA4, inset 11px 11px 2px 0px #2285C7, inset 20px 20px 2px 1px #289DEA, inset 29px 29px 2px 1px #57BBEA"; 
    preview.style.background = "#1C6EA4";
    preview.style.color = "white";

    textArea.value = "box-shadow: inset 2px 2px 2px 2px #1C6EA4, inset 11px 11px 2px 0px #2285C7, inset 20px 20px 2px 1px #289DEA, inset 29px 29px 2px 1px #57BBEA";
});

inOutEffect.addEventListener('click', function(){
    preview.style.boxShadow = "5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000"; 
    preview.style.background = "#1C6EA4";
    preview.style.color = "white";

    textArea.value = "box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000";
});

gradientEffect.addEventListener('click', function(){
    preview.style.boxShadow = "0px 0px 0px 5px #A0A0A0, inset 0px 10px 27px -8px #141414, inset 0px -10px 27px -8px #A31925"; 
    preview.style.background = "#1C6EA4";
    preview.style.color = "white";

    textArea.value = "box-shadow: 0px 0px 0px 5px #A0A0A0, inset 0px 10px 27px -8px #141414, inset 0px -10px 27px -8px #A31925";
});

pileEffect.addEventListener('click', function(){
    preview.style.boxShadow = "5px 5px 0px 0px #289FED, 10px 10px 0px 0px #5FB8FF, 15px 15px 0px 0px #A1D8FF, 20px 20px 0px 0px #CAE6FF, 25px 25px 0px 0px #E1EEFF"; 
    preview.style.background = "#1C6EA4";
    preview.style.color = "white";

    textArea.value = "box-shadow: 5px 5px 0px 0px #289FED, 10px 10px 0px 0px #5FB8FF, 15px 15px 0px 0px #A1D8FF, 20px 20px 0px 0px #CAE6FF, 25px 25px 0px 0px #E1EEFF";
});

checkerEffect.addEventListener('click', function(){
    preview.style.boxShadow = "10px 0 0 #F0F0F0, 20px 0 0 #000, 30px 0 0 #F0F0F0, 0 10px 0 #F0F0F0, 10px 10px 0 #000, 20px 10px 0 #F0F0F0, 30px 10px 0 #000, 0 20px 0 #000, 10px 20px 0 #F0F0F0, 20px 20px 0 #000, 30px 20px 0 #F0F0F0, 0 30px 0 #F0F0F0, 10px 30px 0 #000, 20px 30px 0 #F0F0F0, 30px 30px 0 #000"; 
    preview.style.background = "#1C6EA4";
    preview.style.color = "white";

    textArea.value = "box-shadow: 10px 0 0 #F0F0F0, 20px 0 0 #000, 30px 0 0 #F0F0F0, 0 10px 0 #F0F0F0, 10px 10px 0 #000, 20px 10px 0 #F0F0F0, 30px 10px 0 #000, 0 20px 0 #000, 10px 20px 0 #F0F0F0, 20px 20px 0 #000, 30px 20px 0 #F0F0F0, 0 30px 0 #F0F0F0, 10px 30px 0 #000, 20px 30px 0 #F0F0F0, 30px 30px 0 #000";
});
