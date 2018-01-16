$(document).ready(function () {
    console.log("ready!");
    setScale();
});

function setScale(){
    var back = $(".background");
    var img = $("#bkgimg");
    var front = $(".foreground");
    var frontHeight = getHeightOfChildren(front);
    var imgHeight = img.height();
    var imgWidth = img.width();
    var bodyWidth = $("body").width();
    
    var base = 10;
    var ratio = frontHeight / imgHeight;
    if (ratio < 1) ratio = 1;
    var z = base * ratio;
    var scale = z + ratio;

    back.css("transform", "translateZ(-" + z + "px) scale(" + scale + ")");

    console.log(ratio);
    console.log($("body").width());
    console.log(imgWidth);
}


function getHeightOfChildren(elem) {
    var totalHeight = 0;
    elem.children().each(function () {
        totalHeight += $(this).height();
    });
    return totalHeight;
}