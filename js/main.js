import {LINK_ITEMS,SOCIAL_MEDIAS,NAME_IMAGES} from './constants.js'

document.addEventListener('DOMContentLoaded', () => {
    addNavbar();
    addGalleryImage();
});

function addNavbar(){
    const wrapper_navbar = document.getElementById('wrapper_navbar')
    const wrapper_navbar_footer = document.getElementById('wrapper_navbar-footer')
    const footer_social = document.querySelector('.footer__socialsmedia')
    LINK_ITEMS.forEach((link)=>{
        wrapper_navbar.innerHTML += `<li class="navbar__items"><a href="" class="navbar__enlaces">${link}</a></li>`
        wrapper_navbar_footer.innerHTML += `<li class="navbar__items"><a href="" class="navbar__enlaces">${link}</a></li>`
    })
    SOCIAL_MEDIAS.forEach((item)=>{
        footer_social.innerHTML += `<a href="#" class="socialsmedia__click"><img src=${item} alt="" class="socialsmedia__icons"></a>`
    })
}

function addGalleryImage(){
    const template_gallery = document.getElementById('template__gallery')
    const gallery_imgs = document.querySelector('.gallery__imgs')
    const fragment = document.createDocumentFragment();

   NAME_IMAGES.forEach((item)=>{
       const clone = template_gallery.content.cloneNode(true);

       clone.querySelector('.gallery__divs span').textContent = item.name;
       clone.querySelector(".gallery__divs img").setAttribute('src',`${item.image}`);
       clone.querySelector(".gallery__divs img").setAttribute('alt',`${item.name}`);
       fragment.appendChild(clone);
    })

    gallery_imgs.appendChild(fragment)
}
