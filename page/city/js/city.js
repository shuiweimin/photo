function open() {

    if (this.classList.contains("open")) {
        this.classList.toggle("open");
        console.log("this.style.flex");

    } else {
        photos.forEach(photo => photo.classList.remove("open"));
        this.classList.toggle("open");
        console.log(this.style.flex);

    }


}

const photos = document.querySelectorAll(`.photo`);

photos.forEach(photo => photo.addEventListener("click", open))