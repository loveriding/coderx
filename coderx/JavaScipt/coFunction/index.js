/**
 * Sử dụng node co + axios để tải về các đường link sau theo 2 cách:
 */
var axios = require('axios')
var co = require('co');
var urls = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2',
  'https://jsonplaceholder.typicode.com/todos/3',
  'https://jsonplaceholder.typicode.com/todos/4',
  'https://jsonplaceholder.typicode.com/todos/5'
];
function readLinkPromise(path){
	return new Promise(function(resolve, reject) {
		axios.get(path)
		.then(function(response){
			resolve(response.data)
		})
		.catch(function(error){
			reject(error);
		});
	});
};
// Cách 1: Sử dụng vòng lặp for
for(var path of urls){
	axios.get(path)
	.then(function(response) {
		console.log('Cách 1');
		console.log(response.data);
	})
	.catch(function(error) {
		console.log(error);
	})
}

// Cách 2: Sử dụng array.map
// Gợi ý: Có thể yield 1 array các Promise
var readLink = co.wrap(function*(arr) {
	var value = yield arr.map(function(path) {
		return readLinkPromise(path);
	});
	return value;
});
readLink(urls)
.then(function(value){
	console.log('Cách 2');
	console.log(value);
})
.catch(function(error) {
	console.log(error);
})
