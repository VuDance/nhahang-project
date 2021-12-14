var close = document.querySelector('.close');
var galleryImg = document.querySelector('.gallery__inner img');
var gallery = document.querySelector('.gallery');
var img = document.querySelector('.img');
var header = document.querySelector('header');

img.addEventListener('click',function(){
    gallery.classList.add('show');
    galleryImg.src = img.src;
    header.classList.add('hide');
})
close.addEventListener('click',function(){
    gallery.classList.remove('show');
    header.classList.remove('hide');
})