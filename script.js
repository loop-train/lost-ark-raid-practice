var player = document.getElementById("player");
var playground = document.getElementById("playground");

player.style.marginLeft = playground.clientWidth / 2;
player.style.marginTop = playground.clientHeight / 2;

playground.addEventListener('click', e => {
    var currentX = parseInt(window.getComputedStyle(player).marginLeft.replace("px",""));
    var currentY = parseInt(window.getComputedStyle(player).marginTop.replace("px", ""));
    var clickedX = e.clientX;
    var clickedY = e.clientY;

    var diffX = currentX - clickedX;
    var diffY = currentY - clickedY;

    var marginLeft = calcMarginLeft(clickedX, currentX, diffX);
    var marginTop = calcMarginTop(clickedY, currentY, diffY);

    var distance = Math.round(Math.sqrt(diffX*diffX + diffY*diffY), 2);
    const duration = Math.abs(distance) * 15;
    console.log("distance", distance);
    console.log("duration", duration);

    player.animate(
    {
        marginLeft: marginLeft + "px",
        marginTop: marginTop + "px"
    }, 
    {
        duration: duration,
        fill: "forwards"
    });
});

function calcMarginLeft(clickedX, currentX, diffX) {
    if (false) {
        return clickedX - player.clientWidth / 2;
    } else {
        return Math.min(Math.max(currentX + diffX - player.clientWidth / 2, 0), playground.clientWidth);
    }
}

function calcMarginTop(clickedY, currentY, diffY) {
    if (false) {
        return clickedY - player.clientHeight / 2;
    } else {
        return Math.min(Math.max(currentY + diffY - player.clientHeight / 2, 0), playground.clientHeight);
    }
}