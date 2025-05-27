function highlight() {
    //Write your code here
const doc=
	document.querySelectorAll('strong');
	doc.forEach((word)=>{
		word.style.color='rgb(0, 128, 0)';
	});

}


function return_normal() {
    //Write your code here
const doc=
	document.querySelectorAll('strong');
	doc.forEach((word)=>{
		word.style.color='rgb(0, 0, 0)';
	});

    
}
