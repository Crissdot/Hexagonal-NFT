const color = 'black';

const canvas = document.getElementById('myCanvas');
canvas.width = 400;
canvas.height = 400;
const context = canvas.getContext('2d');
const imageObj = new Image();
const downloadBtn = document.getElementById('download');
const link = document.createElement('a');

//imageObj.src = './sampletest.jpg';
imageObj.onload = () => {
    const canvas2 = document.createElement('canvas');
    canvas2.width = imageObj.width;
    canvas2.height = imageObj.height;
    const context2 = canvas2.getContext('2d');

    const imgSize = 15;
    context2.drawImage(imageObj, imgSize, imgSize, imageObj.width-imgSize*2, imageObj.height-imgSize*2);

    context.fillStyle = color;
    context.fillRect(0, 0, 400, 400);
    context.drawImage(canvas2, 0, 0, canvas2.width, canvas2.height, 0, 0, canvas.width, canvas.height);

    const value1 = imageObj.height*45/100;
    const value2 = imageObj.width*35/100;
    const value3 = imageObj.width*65/100;
    const value4 = imageObj.height*55/100;
    fillCorner(context, 0, value1, 0, 0, value2, 0);
    fillCorner(context, imageObj.width, value1, imageObj.width, 0, value3, 0);
    fillCorner(context, 0, value4, 0, imageObj.height, value2, imageObj.height);
    fillCorner(context, imageObj.width, value4, imageObj.width, imageObj.height, value3, imageObj.height);
}

const fillCorner = (context, x1, y1, x2, y2, x3, y3) => {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2)
    context.lineTo(x3, y3);
    context.closePath();
    context.lineWidth = 5;
    context.fillStyle = color;
    context.fill();
    context.strokeStyle = color;
    context.stroke();
};

const inputNFT = document.getElementById('nftUpload');
inputNFT.addEventListener('change', e => {
    file = e.target.files[0];
    imageObj.src = URL.createObjectURL(file);
    imageObj.height = 400;
    imageObj.width = 400;
    link.download = file.name;
    downloadBtn.style.opacity = 1;
    downloadBtn.style.cursor = 'pointer';
});

downloadBtn.addEventListener('click', () => {
    link.href = canvas.toDataURL("image/png", 1);
	link.click();
})
