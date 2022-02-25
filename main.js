const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');
const imageObj = new Image();
const downloadBtn = document.getElementById('download');

imageObj.onload = () => {
    canvas.height = canvas.width * (imageObj.height / imageObj.width);
    const canvas2 = document.createElement('canvas');
    const context2 = canvas2.getContext('2d');

    canvas2.width = imageObj.width / 2;
    canvas2.height = imageObj.height / 2;
    context2.drawImage(imageObj, 0, 0, canvas2.width, canvas2.height);

    context2.drawImage(canvas2, 0, 0, canvas2.width/2, canvas2.height/2);

    context.drawImage(canvas2, 0, 0, canvas2.width/2, canvas2.height/2, 0, 0, canvas.width, canvas.height);

    context.rect(10, 10, 150, 100);
    context.stroke();
}

const inputNFT = document.getElementById('nftUpload');
inputNFT.addEventListener('change', e => {
    file = e.target.files[0];
    imageObj.src = URL.createObjectURL(file);
    downloadBtn.style.display = 'block';
});

downloadBtn.addEventListener('click', () => {
    let link = document.createElement('a');
    link.download = "aaaaaaaaa.png";
    link.href = canvas.toDataURL("image/png", 1);
	link.click();
})
