!(function(doc,win){
    // 拿到 html 标签的 dom 元素对象
    var docEle = doc.documentElement,
        evt = "onorientationchange" in window ? "onorientationchange" : "resize",
        fn = function() {
            var width = docEle.clientWidth;
            if(width > 320 && width < 768 ) {
                width && (docEle.style.fontSize = 100 * (width / 750) + "px")
                console.log('rem:' + docEle.style.fontSize);
            }else{
                docEle.style.fontSize = "16px";
            }
        }
            win.addEventListener(evt, fn, false);
            doc.addEventListener("DOMContentLoaded",fn,false)
}(document, window));

$('.btn-container').on('click',function() {
    $('#menu').fadeToggle(500);
})