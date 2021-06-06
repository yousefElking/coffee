//navbar

window.onload = function(){

 var
	bar = document.querySelector('.fa-bars'),
	times = document.querySelector('.fa-times'),
	links= document.querySelector('.links');

 bar.onclick = function show(){
	 
	 this.classList.toggle('none');
	 
	 times.classList.toggle('show');
	 
	 links.style.top = '60px';
	 
 }
 
  times.onclick = function hide(){
	 
	 this.classList.toggle('show');
	 
	 bar.classList.toggle('none');
	 
	 links.style.top = '-270px';
 }
 
 //counter
 
 

 var counter = document.querySelectorAll('.counter');
 
  counter.forEach(count => {
	  
	  //count.innerText='0';
	  
	  const updateCounter = () =>{
		  
		   
		  
		 var 
			target = +counter.getAttribute('data-target'),
		  
		    c = +counter.innerText;
		  
		  if( c < target){
			  
			  counter.innerText = c + 1;
			  setTimeout(updateCounter,1);
			  
		  }
		  
	  };
	  
	  
	  updateCounter();
	  
  });
 
 
}