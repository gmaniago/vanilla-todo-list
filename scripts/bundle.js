(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

function output(event) {
	count++;
	localStorage.setItem(1, count);
	array.push('<div>' + count + ') ' + input.value + '</div>');
	render();
}

function render() {
	input.value = '';

	section.innerHTML = done;

	for (var i = 0; i < array.length; i++) {

		section.innerHTML += array[i];
	}

	var list = section.innerHTML;
	console.log(list);
	console.log(localStorage.getItem(1));
	storage.setItem(0, list);
}

function eraseList(event) {
	section.innerHTML = '';
	done = '';
	count = 0;
	storage.setItem(0, '');
	storage.setItem(1, 0);
	array = [];
}

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map