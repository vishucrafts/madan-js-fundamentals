var a = 10;

function add10() {
	return a + 10;
}

function add20(b) {
	return add10(b) + 10;
}

add20(10);


// Node script wrapping function
(function (exports, require, module, __filename, __dirname) {
	// Your module code actually lives in here
	// function add(a: number, b: number) {
	// 	return a + b;
	// }

	// export { add };
});