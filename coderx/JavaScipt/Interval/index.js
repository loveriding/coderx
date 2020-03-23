/**
 * Viết hàm countDown đếm ngược từ x về 0,
  mỗi lần đếm cách nhau 1s, sau đó hiển thị 'Happy new year'
 */
/*function countDown(x) {
var intervalId = setInterval(function(){
	console.log(x--);
	if(x === 0){
		clearInterval(intervalId);
		console.log('Happy new year');
	}
}, 1000)
}

countDown(5);*/

// ==================================================//
/**
 * Viết hàm countDown đếm ngược từ x về 0,
  mỗi lần đếm cách nhau 1s, trả về promise,
   promise này resolve sau khi đã đếm xong
 */
function countDown(x) {
	var promise = new Promise(function(resolve) {
		var intervalId = setInterval(function() {
			console.log(x--);
			if(x <= 0){
				clearInterval(intervalId);
				resolve();
			}
		}, 1000)
	});
	return promise;
}

function sayHappyNewYear() {
  console.log('Happy new year, Bum BUm BUm');
}

countDown(5).then(sayHappyNewYear);