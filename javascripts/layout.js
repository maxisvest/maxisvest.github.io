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
    setTimeout(function(){$("#planetPic").animate({top:'-=50px', opacity:'1'},1000);},600);
    setTimeout(function(){$("#1").animate({opacity:'1'},400);},0);
    setTimeout(function(){$("#2").animate({opacity:'1'},400);},200);
    setTimeout(function(){$("#3").animate({opacity:'1'},400);},400);
    setTimeout(function(){$("#4").animate({opacity:'1'},400);},600);
    setTimeout(function(){$("#5").animate({opacity:'1'},400);},800);
    setTimeout(function(){$("#6").animate({opacity:'1'},400);},1000);
    setTimeout(function(){$("#7").animate({opacity:'1'},2000);},0);
    setTimeout(function(){$("#foot_hr").animate({width:'100%'},2000);},0);
    setTimeout(function(){$("#project_title").animate({top:'+=220', opacity:'1'},1400);},0);
    setTimeout(function(){$("#project_tagline").animate({top:'+=240', opacity:'1'},1400);},200);
});