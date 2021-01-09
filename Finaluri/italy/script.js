let w, h, v, vw, vh;
v = document.getElementById("myvideo")

const sizes = function (){
    w = window.innerWidth;
    h = window.innerHeight;

    vw = v.clientWidth;
    vh = v.clientHeight;
    if (h/w < vh/vw){
        v.style.width = w + "px";
        v.style.height= w * vh/vw + "px";
        v.style.left = "0";
        v.style.top = (h-w * vh/vw)/2 + "px";
    } else {
        v.style.height= h + "px";
        v.style.width= h * vw/vh +"px";
        v.style.top = "0";
        v.style.left = (w-h * vw/vh)/2 + "px";
    }
    v.style.opacity="1";
}

v.addEventListener("canplay", sizes);

v.addEventListener("timeupdate",function() {
    if (v.currentTime > 0 && v.currentTime < 1){
        document.getElementById("dawyeba").style.display = "block"
    } else {
        document.getElementById("dawyeba").style.display = "none"
    }
});

v.addEventListener("timeupdate",function() {
    if (v.currentTime > 1 && v.currentTime < 2){
        document.getElementById("right").style.display = "block";
        document.getElementById("wrong").style.display = "block";
        document.getElementById("kitxva").style.display = "block";
        v.pause();
    } else {
        document.getElementById("right").style.display = "none"
        document.getElementById("wrong").style.display = "none"
        document.getElementById("kitxva").style.display = "none"
    }
});

document.getElementById("right").addEventListener("click", function (){
    document.getElementById("txtright").style.left = "0";
    v.currentTime = 2;
    v.play();
})

document.getElementById("wrong").addEventListener("click", function (){
    document.getElementById("txtwrong").style.left = "0";
    v.currentTime = 2;
    v.play();
})