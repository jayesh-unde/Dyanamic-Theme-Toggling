(function(){
    document.querySelector("html").style.filter = "invert(1)";
let media = document.querySelectorAll("img, picture, video,yt-image,ytd-thumbnail");

media.forEach((mediaItem)=>{
    mediaItem.style.filter="invert(1)";
})
})();
