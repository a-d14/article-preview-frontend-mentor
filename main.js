const socialMediaList = document.querySelector(".article-preview-card__socials");

document.querySelector(".article-preview-card__action").addEventListener('click', function() {
    this.classList.toggle("article-preview-card__action--active");
    socialMediaList.classList.toggle("article-preview-card__socials--active")
});