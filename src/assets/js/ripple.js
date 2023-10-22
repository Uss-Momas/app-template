$(function(){
    // Ripple effect
	$(".waves-effect").on("click",function(e){
		var X = e.pageX - $(this).offset().left;
		var Y = e.pageY - $(this).offset().top;
		var rippleDiv = document.createElement("div");
		rippleDiv.classList.add('ripple');
		rippleDiv.setAttribute("style","top:"+Y+"px; left:"+X+"px;");
		rippleDiv.style.background = "#ccc";
		this.appendChild(rippleDiv);
		setTimeout(function(){
			rippleDiv.parentElement.removeChild(rippleDiv);
		}, 900);
	});
}(jQuery))