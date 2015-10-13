var myImage = document.querySelector('img');
myImage.onclick = function(){
	var attr = myImage.getAttribute('src');
	if(attr == './images/NailArt.jpg'){
		myImage.setAttribute('src','./images/Zumba.jpg');
	}else{
		myImage.setAttribute('src','./images/NailArt.jpg');
	}
}

var headTitle = document.querySelector('h1');
var userBtn = document.querySelector('button');

function setUserName(){
	var namestore = prompt("Enter user name");
	localStorage.setItem('name', namestore);
	headTitle.innerHTML = 'Welcome '+ namestore;
}
	if(!localStorage.getItem('name')){
		setUserName();
	}else{
		var storedname = localStorage.getItem('name');
		headTitle.innerHTML = 'Welcome Stored ' + storedname;	
	}
	


userBtn.onclick = function(){
	setUserName();
}