'use strict';

var section = document.getElementById('list');
var input = document.getElementById('tasks');
var erase = document.getElementById('erase');
var storage = localStorage;
var count = localStorage.getItem(1);
var done = section.innerHTML;
var array = [];


section.innerHTML = localStorage.getItem(0);
btn.addEventListener('click', output);
erase.addEventListener('click', eraseList);

function output(event){
	count++
	localStorage.setItem(1, count);
	array.push('<div>'+count+') '+input.value+'</div>');
	render();
}

function render(){
	input.value ='';

	section.innerHTML = done;

	for(var i = 0; i <array.length; i++){

		section.innerHTML += array[i];			
	}	

	var list = section.innerHTML;
	console.log(list);
	console.log(localStorage.getItem(1));
	storage.setItem(0, list);
}

function eraseList(event){
	section.innerHTML = '';
	done = '';
	count = 0;
	storage.setItem(0, '');
	storage.setItem(1, 0);
	array = [];

}





