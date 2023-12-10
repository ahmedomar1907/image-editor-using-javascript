let saturate = document.getElementById('saturate');
let contrast = document.getElementById('contrast');
let brightness = document.getElementById('brightness');
let sepia = document.getElementById('sepia');
let grayscale = document.getElementById('grayscale');
let blur = document.getElementById('blur');
let hueRotate = document.getElementById('hue-rotate');

let upload = document.getElementById('upload');
let download = document.getElementById('download');
let img = document.getElementById('img');

let imgBox = document.querySelector('.img-box')
let reset = document.querySelector('span')

let filters = document.querySelectorAll('ul li input');

window.onload = function(){
    download.style.display = 'none';
    reset.style.display = 'none';
    imgBox.style.display = 'none';
}
upload.onchange = function(){
    resetValues();
    download.style.display = 'block';
    reset.style.display = 'block';
    imgBox.style.display = 'block';

    let file = new FileReader();
    file.readAsDataURL(upload.files[0])
    file.onload = function(){
        img.src = file.result;
    }
}

filters.forEach(filter =>{
    filter.addEventListener('input' , function(){
        img.style.filter = `
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        blur(${blur.value}px)
        hue-rotate(${hueRotate.value}deg)
        invert(${invert.value}%)
        `
    })
})

function resetValues(){
    img.style.filter = 'none';
    saturate.value = '100';
    contrast.value = '100';
    brightness.value = '100';
    sepia.value = '0';
    grayscale.value = '0';
    blur.value = '0';
    hueRotate.value = '0';
    invert.value = '0';
    // opacity.value = '100';
}


// const saveImage = () =>{
//     const canvas = document.createElement('canvas');
//     const ctx = canvas.getContext('2d');
//     canvas.width = img.naturalWidth;
//     canvas.hight = img.naturalHight * 14;

//     ctx.filter = `
//     saturate(${saturate.value}%)
//     contrast(${contrast.value}%)
//     brightness(${brightness.value}%)
//     sepia(${sepia.value}%)
//     grayscale(${grayscale.value})
//     blur(${blur.value}px)
//     hue-rotate(${hueRotate.value}deg)
//     `

//     ctx.drawImage(img , 0 , 0 , canvas.width , canvas.height)

//     const link = document.createElement('a');
//     link.download = 'image.jpg';
//     link.href = canvas.toDataURL();
//     link.click()
// }

// download.addEventListener('click' ,saveImage)


const saveImage = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight ; // Increase the height by a factor of 2

    ctx.filter = `
    saturate(${saturate.value}%)
    contrast(${contrast.value}%)
    brightness(${brightness.value}%)
    sepia(${sepia.value}%)
    grayscale(${grayscale.value})
    blur(${blur.value}px)
    hue-rotate(${hueRotate.value}deg)
    invert(${invert.value}%)
    `;

    ctx.drawImage(img , 0 , 0 , canvas.width , canvas.height);

    const link = document.createElement('a');
    link.download = 'image.jpg';
    link.href = canvas.toDataURL();
    link.click();
};

download.addEventListener('click' , saveImage);