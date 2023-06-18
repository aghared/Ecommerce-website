
const Rec_images = ["133.png", "134.png", "135.png","136.png", "196.png", "197.png"];

Rec_images.forEach(addImage)

function addImage(image){
    const image_el = document.createElement('img')
    image_el.setAttribute('src',image)
    document.getElementById('scroll-container-Recomendation').append(image_el)
   
}