var request = require('request');
console.log('Start fetching...');
function load(path) {
	return new Promise(function(resolve, reject) {
	request(path, function(error,body){
		if(error) {
			reject(error);
		}
		else {
			resolve(body.body);
		}
	});
	});
}
load('https://jsonplaceholder.typicode.com/todos/1')
.then(function(body) {
	console.log('Done',body);
});


/**
 * Viết function `load` nhận vào 1 tham số là 1 đường link dạng string, trả về 1 promise sao cho khi gọi:
 * load('some url').then(function(body) {
 *   console.log('Done', body);
 * });
 * thì sẽ hiển thị ra màn hình 'Done' kèm theo nội dung đường link đã truyền vào.
 * Sau 30' không làm được thì có thể lên Slack hỏi
 */