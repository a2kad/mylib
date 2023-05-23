const mainDiv = document.getElementById('mainDiv')
let startPhoto = 1

function showGallery(numPhoto) {
    for (let i = 0; i < numPhoto; i++) {
        //     mainDiv.innerHTML += `
        // <a href="https://picsum.photos/seed/${i}/600/400?random=${i}" data-lightbox="image-${i}" data-title="My caption">
        //         <img src="https://picsum.photos/seed/${i}/300/200?random=${i}" alt="">
        //     </a>
        // `
        let imgGallery = document.createElement('img')
        let aGallery = document.createElement('a')
        mainDiv.appendChild(aGallery)
        aGallery.appendChild(imgGallery)
        aGallery.setAttribute('href', `https://picsum.photos/seed/${startPhoto}/1200/800?random=${startPhoto}`)
        aGallery.setAttribute('data-lightbox', `afpaImage`)
        aGallery.setAttribute('data-title', `Image ${startPhoto}`)
        imgGallery.setAttribute('src', `https://picsum.photos/seed/${startPhoto}/300/200?random=${startPhoto}&grayscale&blur=1`)
        imgGallery.classList.add('smallImg')
        startPhoto++
    }
    
}

lightbox.option({
    'resizeDuration': 300,
    'imageFadeDuration': 300,
    'wrapAround': true
})

showGallery(67)

window.addEventListener('scroll',()=>{
    console.log(window.scrollY) //scrolled from top
    console.log(window.innerHeight) //visible part of screen
    if(window.scrollY + window.innerHeight >= 
    document.documentElement.scrollHeight){
    showGallery(6);
    }
})



