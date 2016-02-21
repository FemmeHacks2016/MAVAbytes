/* ####################### begins list of images to be used

####################### */

currentIndx=0;

MyImages=new Array();

MyImages[0]='vulcano.gif';

MyImages[1]='eye.gif';

MyImages[2]='ear.gif';

MyImages[3]='hand.gif';

 

/* ####################### now we preload the images ####################### */

imagesPreloaded = new Array(4)

for (var i = 0; i < MyImages.length ; i++)

{

imagesPreloaded[i] = new Image(120,120)

imagesPreloaded[i].src=MyImages[i]

/* ####################### this function loads a random image ####################### */

function newImage() {

// Makes a random, whole number between 0 and 3

currentIndx=Math.round(Math.random()*3)

document.theImage.src=imagesPreloaded[currentIndx].src

}

}