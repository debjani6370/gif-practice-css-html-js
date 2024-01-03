let btnjs = document.querySelector(".btn2");
let position;

btn.addEventListener("mousehover", function(){
    position ? (position=0):(position=150);
    btnjs.style.transform= `translate(${position}px, 0px)`;
    btnjs.style.transition="all 0.3s ease";

})

function changeimg(){
    var img=document.getElementById('image')
    img.src="gif/cat-2.gif";

    var text =document.getElementById('text').innerHTML="THANK YOU SO MUCH ❤️"
    
}



function changeimgno()
{
    var img=document.getElementById('image')
    img.src="gif/cry.gif";

    var text =document.getElementById('text').innerHTML="ohk 💔❤‍🩹"
    

}