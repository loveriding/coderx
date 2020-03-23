var fs = require('fs');
var axios = require('axios');

/*fs.readFile(
  './data.json', 
  { encoding: 'utf8'}, 
  function(err, data) {
    console.log('Data loaded from disk', data);

    axios.get('https://jsonplaceholder.typicode.com/todos/1')
      .then(function(res) {
        console.log('Data downloaded from url', res.data);
      });
  }
);*/

function readLinkPromise(path){
	return new Promise(function(resolve, reject) {
		axios.get(path)
		.then(function(response) {
			resolve(response.data);
		})
		.catch(function(error) {
			reject(error);
		})
	})
};
function readFilePomise(path){
	return new Promise(function(resolve, reject){
		fs.readFile(path, {encoding:'utf8'}, function(err, data){
			if(err){
				reject(err);
			}
			else
				resolve(JSON.parse(data));
		})
	})
};
/**
 * Sử dụng async await kết hợp với Promise để viết lại đoạn code trên. Gợi ý: Viết lại 1 async function làm 2 việc trên và chạy thử
 */
 async function run(){
 	var file =[ await readFilePomise('./data.json'), await readLinkPromise('https://jsonplaceholder.typicode.com/todos/1')];
 	 return file ;
 }
 run().then(function(value) {
 	console.log(value);
 }).catch(function(err) {
 	console.log(err);
 })