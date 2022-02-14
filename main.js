const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');
const imageObj = new Image();

imageObj.onload = () => {
    canvas.height = canvas.width * (imageObj.height / imageObj.width);
    const canvas2 = document.createElement('canvas');
    const context2 = canvas2.getContext('2d');

    canvas2.width = imageObj.width / 2;
    canvas2.height = imageObj.height / 2;
    context2.drawImage(imageObj, 0, 0, canvas2.width, canvas2.height);

    context2.drawImage(canvas2, 0, 0, canvas2.width/2, canvas2.height/2);

    context.drawImage(canvas2, 0, 0, canvas2.width/2, canvas2.height/2, 0, 0, canvas.width, canvas.height);
}

const inputNFT = document.getElementById('nftUpload');
inputNFT.addEventListener('change', e => {
    file = e.target.files[0];
    imageObj.src = URL.createObjectURL(file);
});
