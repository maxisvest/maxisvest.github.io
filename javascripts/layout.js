window.onload = function(){
        var current = 0;
        document.getElementById('target').onclick = function(){
        current = (current+90)%360;
        this.style.transform = 'rotate('+current+'deg)';
        }
    }

function easter_egg(){
        alert("You found it!!!");
    }

$(document).ready(function(){
    $("#planetPic").animate({top:'-=100px',
    opacity:'1'},1500);
});	