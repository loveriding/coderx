/**
 * Sử dụng Promise.all + axios để tải về 3 đường link sau cùng lúc và hiển thị ra kết quả:
 * https://jsonplaceholder.typicode.com/todos/1
 * https://jsonplaceholder.typicode.com/todos/2
 * https://jsonplaceholder.typicode.com/todos/3
 */
 var axios = require('axios');
 function load(path){
 	return new Promise(function(resolve, reject) {
 		axios.get(path)
 		.then(function (response) {
   			resolve(response.data);
 		 })
  		.catch(function (error) {
    		reject(error);
  		});
 	});
 	};
 
 Promise.all([
 	load('https://jsonplaceholder.typicode.com/todos/1'),
 	load('https://jsonplaceholder.typicode.com/todos/2'),
 	load('https://jsonplaceholder.typicode.com/todos/3')
 	]).then(function(values){
 		console.log(values);
 	}).catch(function(error){
 		console.log(error);
 	});
