const blocks = [
    {
        id: '0',
        name: 'Classic',
        size: '43 x 47 x 10',
        material: 'Genuine Leather',
        manufacturer: 'Polish - Krumkacz',
        subtitle: 'HandMade',
        price: '150',
        waluta: 'PLN'
    },
    {
        id: '1',
        name: 'Classic 2',
        size: '45 x 25 x 23',
        material: 'Genuine Leather',
        manufacturer: 'Polish - Krumkacz',
        subtitle: 'HandMade',
        price: '150',
        waluta: 'PLN'
    },
    {
        id: '2',
        name: 'Classic 2',
        size: '45 x 25 x 23',
        material: 'Genuine Leather',
        manufacturer: 'Polish - Krumkacz',
        subtitle: 'HandMade',
        price: '150',
        waluta: 'PLN'
    },
    {
        id: '3',
        name: 'Classic Shopper',
        size: '45 x 25 x 23',
        material: 'Genuine Leather',
        manufacturer: 'Polish - Krumkacz',
        subtitle: 'HandMade',
        price: '550',
        waluta: 'PLN'
    },
    {
        id: '4',
        name: 'Classic Shopper',
        size: '20 x 10 x 5',
        material: 'Genuine Leather',
        manufacturer: 'Polish - Krumkacz',
        subtitle: 'HandMade',
        price: '550',
        waluta: 'PLN'
    },
    {
        id: '5',
        name: 'Classic shopper',
        size: '120 x 5 x 0.5',
        material: 'Genuine Leather',
        manufacturer: 'Polish - Krumkacz',
        subtitle: 'HandMade',
        price: '260',
        waluta: 'PLN'
    },
    {
        id: '6',
        name: 'Denim belt',
        size: '120 x 5 x 0.5',
        material: 'Genuine Leather',
        manufacturer: 'Polish - Krumkacz',
        subtitle: 'HandMade',
        price: '260',
        waluta: 'PLN'
    },
    {
        id: '7',
        name: 'Bag',
        size: '120 x 5 x 0.5',
        material: 'Genuine Leather',
        manufacturer: 'Polish - Krumkacz',
        subtitle: 'HandMade',
        price: '260',
        waluta: 'PLN'
    }
]

// Изменение размера блока с катинками галереи

let gallery = document.querySelector('.gallery');
let galleryBlock = document.querySelector('.gallery__block');
let dataCollection = document.querySelectorAll('.data_collection');
let sizeGalleryBlock = galleryBlock.clientHeight; // Определяем размер блока с картинкой при загрузке
console.log("Высота блока при загрузке страницы: " + sizeGalleryBlock);
window.onresize = myScript;

function myScript() {
    sizeGalleryBlock = galleryBlock.clientHeight;
}

gallery.addEventListener("mouseover", (event) => {

    if (event.target.classList.contains('gallery__item')) {
        let indexClickBlock = event.target.dataset.itemid;
        console.log("Индекс: " + indexClickBlock);
        dataCollection[indexClickBlock].innerHTML = `
        <div class='name'><b>NAME: </b>${blocks[indexClickBlock].name}</div>
        <div class='size'><b>SIZE: </b>${blocks[indexClickBlock].size}</div>
        <div class='material'><b>MATERIAL: </b>${blocks[indexClickBlock].material}</div>
        <div class='manufacturer'><b>BRANDNAME: </b>${blocks[indexClickBlock].manufacturer}</div>
        <div class='subtitle'><b>Description: </b>${blocks[indexClickBlock].subtitle}</div>
        <div class='price'><b>PRICE: </b>${blocks[indexClickBlock].price} ${blocks[indexClickBlock].waluta}</div>
        `;
        dataCollection[indexClickBlock].style.transform = `translateY(-${sizeGalleryBlock * 0.5}px)`;
    }

});

// Изменение размера блока с катинками
