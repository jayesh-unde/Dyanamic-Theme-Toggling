(function(){
    document.querySelector("html").style.filter = "none";
let media = document.querySelectorAll("img, picture, video,yt-image,ytd-thumbnail");

media.forEach((mediaItem)=>{
    mediaItem.style.filter="none";
})
})();