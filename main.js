


var imgContainer =  document.querySelector('.image-container')
var imgList = document.querySelectorAll('.imglist')

for (var i = 0 ; i < imgList.length ; i++) {
    imgList[i].addEventListener('click',function(e) {
    var imgsrc = e.target.getAttribute('src');
    imgContainer.setAttribute('src',imgsrc) 
    })
}