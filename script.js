var player = document.getElementById("player");
var playground = document.getElementById("playground");

player.style.marginLeft = playground.clientWidth / 2;
player.style.marginTop = playground.clientHeight / 2;

playground.addEventListener('click', e => {
    var currentX = parseInt(player.style.marginLeft.replace("px",""));
    var currentY = parseInt(player.style.marginTop.replace("px", ""));
    var clickedX = e.clientX;
    var clickedY = e.clientY;

    var diffX = clickedX - currentX;
    var diffY = clickedY - currentY;

    var marginLeft = calcMarginLeft(clickedX, currentX, diffX);
    var marginTop = calcMarginTop(clickedY, currentY, diffY);

    var distance = Math.round(Math.sqrt(diffX*diffX, diffY*diffY), 2);
    const duration = Math.abs(distance + 1) * 10;

    player.animate(
    {
        marginLeft: marginLeft + "px",
        marginTop: marginTop + "px"
    }, 
    {
        duration: 2000,
        fill: "forwards"
    });
});

function calcMarginLeft(clickedX, currentX, diffX) {
    if (false) {
        return clickedX - player.clientWidth / 2;
    } else {
        return Math.min(currentX - diffX, playground.clientWidth);
    }
    // return newX - player.clientWidth
}

function calcMarginTop(clickedY, currentY, diffY) {
    if (false) {
        return clickedY - player.clientHeight / 2;
    } else {
        return Math.min(currentY - diffY, playground.clientHeight);
    }
    // return newY - title.offsetHeight - player.clientHeight;
}