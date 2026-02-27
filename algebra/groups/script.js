function flip_hor() {
	document.getElementById("rhombush").classList.toggle("h");
}

function flip_ver() {
	document.getElementById("rhombusv").classList.toggle("v");
}

function rotate() {
	document.getElementById("rhombusr").classList.toggle("r");
}

function reset() {
	document.getElementById("rhombush").classList.remove("h");
	document.getElementById("rhombusv").classList.remove("v");
	document.getElementById("rhombusr").classList.remove("r");
}
