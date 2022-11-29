var getimgs = document.querySelectorAll('.img');
var getmodal = document.querySelector('.modal');
var getbtnclose =document.querySelector('.btn-close');
// console.log(getimgs);


for(var i=0; i<getimgs.length; i++){
	getimgs[i].addEventListener('click',function(){
		showmodal();
	});
}


function showmodal(){
	getmodal.style.display="block";
}

getbtnclose.addEventListener('click',function(){
	getmodal.style.display="none";
});

document.addEventListener('click',function(e){
	if(e.target === getmodal){
		getmodal.style.display="none";
	}
});