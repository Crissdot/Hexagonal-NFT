const canvas = document.getElementById('myCanvas');
canvas.width = 400;
canvas.height = 400;
const context = canvas.getContext('2d');
const imageObj = new Image();
const downloadBtn = document.getElementById('download');

imageObj.src = './sampletest.jpg';
imageObj.onload = () => {
    const canvas2 = document.createElement('canvas');
    canvas2.width = imageObj.width;
    canvas2.height = imageObj.height;
    const context2 = canvas2.getContext('2d');

    context2.drawImage(imageObj, 0, 0, imageObj.width, imageObj.height);

    context.drawImage(canvas2, 0, 0, canvas2.width, canvas2.height, 0, 0, canvas.width, canvas.height);

    fillCorner(context, 0, imageObj.height*40/100, 0, 0, imageObj.width*25/100, 0);
    fillCorner(context, imageObj.width, imageObj.height*40/100, imageObj.width, 0, imageObj.width*75/100, 0);
    fillCorner(context, 0, imageObj.height*60/100, 0, imageObj.height, imageObj.width*25/100, imageObj.height);
    fillCorner(context, imageObj.width, imageObj.height*60/100, imageObj.width, imageObj.height, imageObj.width*75/100, imageObj.height);
}

const fillCorner = (context, x1, y1, x2, y2, x3, y3) => {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2)
    context.lineTo(x3, y3);
    context.closePath();
    context.lineWidth = 5;
    context.fillStyle = '#14171A'
    context.fill();
    context.strokeStyle = '#14171A';
    context.stroke();
};

const inputNFT = document.getElementById('nftUpload');
inputNFT.addEventListener('change', e => {
    file = e.target.files[0];
    imageObj.src = URL.createObjectURL(file);
    imageObj.height = 400;
    imageObj.width = 400;
    downloadBtn.style.display = 'block';
});

downloadBtn.addEventListener('click', () => {
    let link = document.createElement('a');
    link.download = "aaaaaaaaa.png";
    link.href = canvas.toDataURL("image/png", 1);
	link.click();
})
