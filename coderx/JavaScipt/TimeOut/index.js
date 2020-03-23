/** 1--
 * Tạo 1 hàm doAfter nhận vào 2 tham số:
 *  - Tham số thứ 1: 1 function
 *  - Tham số thứ 2: Thời gian x (ms)
 * Hàm này sẽ gọi function sau 1 khoảng thời gian x ms
 */
/*console.log('Start');
var call = function(){
	console.log('Called');
}
function doAfter(fn, time) {
	var action = setTimeout(fn, time);
}
console.log('Finish');
doAfter(call, 1000);*/
// -------------------------------------------//
/**
 * Tạo 1 hàm doAfter nhận vào 2 tham số:
 *  - Tham số thứ 1: 1 function
 *  - Tham số thứ 2: Thời gian x (ms)
 * Hàm này sẽ gọi function sau 1 khoảng thời gian
  x ms VÀ trả về 1 promise để có thể gọi như sau
 */

function doAfter(fn, time) {
	var promise =  new Promise(function(resolve, reject) {
		var action = setTimeout(resolve(fn()), time) //function(){resolve(fn());
	});
	return promise;
}

function sayHello() {
  console.log('Hello');
}

function sayGoodbye() {
  console.log('Goodbye');
}

doAfter(sayHello, 1000).then(sayGoodbye);
// Expect: 
// Đợi 1s
// Hello
// Goodbye