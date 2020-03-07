window.onload = function()
{
//TO TOP BUTTON & STICKY MENU APPEAR
    const goUP = document.querySelector('#goUP');
    const mainNav = document.querySelector('#heroSection nav');
    const showStickyMenuAndGoUpButton = ()=>{
        if(window.scrollY > window.innerHeight){
            goUP.style.display = 'block';
            mainNav.style.position = 'fixed';
        }else{
            goUP.style.display = 'none';
            mainNav.style.position = 'relative';
        }
    }
    window.addEventListener('scroll', showStickyMenuAndGoUpButton);
    goUP.addEventListener('click',()=> window.scrollTo(0,0));
//GALLERY
    const galleryImages = document.querySelectorAll('.galleryPhotos');
    const regExPattern = /\d/;
    const leftArrow = document.querySelector("#leftArrow");
    const rightArrow = document.querySelector("#rightArrow");
    rightArrow.addEventListener('click',function(){
        for (let i = 0; i < galleryImages.length; i++){
            let tmpImageNumber = parseInt(regExPattern.exec(galleryImages[i].getAttribute('src'))[0]);
            if(tmpImageNumber>1){
                galleryImages[i].setAttribute('src','./img/gallery/gallery_'+parseInt(tmpImageNumber-1)+'.jpg')
            }else{
                galleryImages[i].setAttribute('src','./img/gallery/gallery_6.jpg');
            }
        }
    })
    leftArrow.addEventListener('click',function(){
        for (let i = 0; i < galleryImages.length; i++) {
            let tmpImageNumber = parseInt(regExPattern.exec(galleryImages[i].getAttribute('src'))[0]);
            
            if(tmpImageNumber<6){
                galleryImages[i].setAttribute('src','./img/gallery/gallery_'+parseInt(tmpImageNumber+1)+'.jpg')
            }else{
                galleryImages[i].setAttribute('src','./img/gallery/gallery_1.jpg')
            }
        }
    })
//GALLERY MODAL IMAGE 
    const imagePreviewLG = document.querySelector("#imagePreviewLG");
    for(image of galleryImages){
        image.addEventListener('click',function(){
            imagePreviewLG.setAttribute('src',this.src);
            $('#imagePreview').modal('show');
        })
    }
}

