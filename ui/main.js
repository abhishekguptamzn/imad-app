console.log('Loaded!');

var button = document.getElementById('counter');
button.onclick = function() {

	//Create a request 
	var request = new XMLHttpRequest();
	console.log(request);
	//Capture the response
	request.onreadystatechange = function() {
if (request.readyState === XMLHttpRequest.DONE) {

	if (request.status === 200) {
		var counter = request.responseText;
		var span = document.getElementById('count');
	span.innerHTML = counter.toString();
	}
}
	};
	request.open('GET','/counter',true);
	request.send(null);


}

//Submit Name 
var submitBtn = document.getElementById('namesubmit');
submitBtn.onclick = function() {

var request = new XMLHttpRequest();

	//Capture the response
	request.onreadystatechange = function() {
if (request.readyState === XMLHttpRequest.DONE) {

	if (request.status === 200) {
		var names = request.responseText;
		names = JSON.parse(names);
	var list = '';
	for (var i =0; i <names.length; i++) {
		list+='<li>'+names[i]+'</li>';
	}
	var ul = document.getElementById('namelist');
	ul.innerHTML = list;


	}
}
	};
	var nameInput = document.getElementById('name');
var name = nameInput.value;
	console.log(name);
	request.open('GET','/name-save?name=' + name,true);
	request.send(null);
}