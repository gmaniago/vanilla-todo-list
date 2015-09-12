'use strict';

var input = document.getElementById('tasks');
var section = document.getElementById('list');
var erase = document.getElementById('erase');
var button = document.getElementById('btn');
var array = [];
var storage = localStorage;

section.innerHTML = localStorage.getItem(0);

btn.addEventListener('click', output);
erase.addEventListener('click', eraseList);

var done = section.innerHTML;
var count = localStorage.getItem(1);

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





