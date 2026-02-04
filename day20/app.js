const cursor = document.querySelector(".cursor");
const gap = -10;
document.addEventListener('mousemove',function(event){
    mousemove(event.pageX,event.pageY)
})
const mousemove = function(pageX,pageY){
    cursor.style.left = pageX +gap + "px";
    cursor.style.top= pageY+gap+ "px";
}