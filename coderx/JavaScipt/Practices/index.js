
function reverse1(str) { // hàm đảo ngược chuỗi
	var a = "";
	var length = str.length;
	for(var i = length - 1; i >= 0; i--){
		//console.log(typeof(str[i]))
		a += str[i]
		// console.log(a)
	}
	return a;
}
function reverse2(str) { //Hàm đảo ngược chuỗi- Đệ quy

	if(str === "") 
		return "";
	else
		return reverse(str.substr(1)) + str.charAt(0);
}
function upper(str) { // hàm để viết hoa chữ cái đầu của từng từ trong câu
	var arr = str.split('');
	var a = '';
	a += arr[0].toUpperCase()
	for(var i = 1; i < arr.length; i++){
		if(arr[i - 1] === " ") {
			a += arr[i].toUpperCase();
		}
		else
			a+= arr[i];
	}
	return a;
	
}
function titleCase(str) { //hàm để viết hoa chữ cái đầu của từng từ trong câu
   var splitStr = str.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       // You do not need to check if i is larger than splitStr length, as your for does that for you
       // Assign it back to the array
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   // Directly return the joined string
   return splitStr.join(' '); 
}
function getExtensionFilename(filename) { // Viết hàm lấy extension của một file
	var index = 1 ; 
  for(let i in filename){
  	if(filename[i] === ".")
  		index += parseInt(i)
  }
  var ext = filename.substr(index)
  console.log(ext)
  return ext ;
}

// Example
// getExtensionFilename("abc.mp3") // "mp3"

function getExtensionFilename(filename) {// Viết hàm lấy extension của một file
  // viết code ở đây.
  return filename.substr(filename.indexOf('.') + 1); 
}



function findMax(a,b,c){ // viết hàm lấy ra giá trị lớn nhất trong 3 số nhập vào
	return Math.max(Math.max(a,b),c);
}

function startWith(str){// viết hàm Kiểm tra xem một chuỗi bắt đầu bằng "Java" hay không 
// var a = str.substring(0,4)
console.log(a)
	if(str.substring(0,4) === 'Java')
		return true;
	return false;
}

function startWith(str){// viết hàm kiểm tra xem một chuỗi bắt đầu bằng "Java" hay không 
  // viết code ở đây.
  if(str.indexOf('Java') === 0) {
      return true;
  }
  return false;
}

/*
  - Viết hàm findMaxDiff nhận tham số là một mảng integer (mảng số nguyên)
  - Trả về sự khác biệt lớn nhất giữa hai phần tử liền kề của mảng đó.
  - Nếu mảng có 1 phần tử hoặc không có phần tử nào trả về 0
  Example: 
  [1, -10, 5, 18, -9, 5] => 27
*/
function findMaxDiff(arr) {
	max = 0 ;
	if(arr.length === 0 || arr.length === 1){
		console.log('thien')
		return 0;
	}
  	var a = arr.reduce(function(a,b){
  		max = Math.max(max,Math.abs(a - b))
  		return b;
  })
  	console.log(max)
  	return max;
}
/*findMaxDiff([1, -10, 5, 18, -9, 5])
findMaxDiff([])
findMaxDiff([1])*/

function equal_pt(str){ //Viêt 1 function kiểm tra số lương kí tự 'p' và 't' của 1 chuỗi có bằng nhau hay không
 var p = 0, t = 0;
  for(let i of str) {
  	if(i === 'p')
  		p += 1;
  	if(i === 't') {
  		t += 1;
  	}
  }
  return p === t;
}
function equal_pt(str){ 
 // viết code ở đây.
 var p = str.split('p').length - 1;
 var t = str.split('t').length - 1;
 return p === t;
 
}
// console.log(equal_pt('paatpsts'))
// console.log(equal_pt('paatpss'))
// -----------------------------------


// viết hàm first trả về giá trị đầu tiên của mảng, nếu n được truyền vào thì trả về 1 mảng chứa n giá trị đầu tiên của mảng (hoặc cả mảng nếu n lớn hơn số phần tử của mảng). Nếu n <= 0 thì trả về mảng trống.
// Tham số:
//	- array: mảng gốc
//	- n: số phần tử trả về
function first(array, n) {
	console.log(n)
  	var arr = [];
	if(n < array.length){
	  for(let i = 0; i < n; i++){
	  	arr.push(array[i]);
	  }
	}
  	else if (n === undefined)
  		arr.push(array[0])
  	else return array;
  	console.log(arr);
  	return arr;
}
// first([7, 9, 0, -2])

function omitCharAt(str, n) { //Viết function omitCharAt  trả về chuỗi đã được loại bỏ ký tại vị trí n bất kỳ
	arr = str.split('');
	arr.splice(n,1,null)
	console.log(arr.join(''))
}
//omitCharAt("Hello Quang Dat", 8)


/* Viết hàm pyString để tạo chuỗi mới thêm "Py" trước chuỗi nhập vào. 
Nếu chuỗi đã cho đã bắt đầu bằng "Py" thì hãy trả về chuỗi gốc (không cần thêm).
Tham số:
- String: chuỗi nhập vào lúc đầu.
*/

function pyString(string) {
  if(string.substring(0,2) === 'Py')
  	return string;
  arr = string.split('');
  arr.unshift('P','y');
  str = arr.join('');
  console.log(str)
  return str;
}
// pyString("Coders X")

/* Viết hàm toNextChar dùng để thay thế mọi ký tự trong một chuỗi 
thành ký tự theo sau nó trong bảng chữ cái. Ví dụ: "Hello" chuyển thành "Ifmmp"
// Tham số: ascii: 97-122
// - String: chuỗi nhập vào ban đầu.
*/

function toNextChar(str) {
  var string = '';
  //var x = 0;
  for(let i in str) {
  	if(str[i] === 'z'){
  		string += 'z'
  	}
  	else{
  		var x = str.charCodeAt(i)
  		console.log(x);
  		string += String.fromCharCode(x + 1)
  	}
  }
  
  console.log(string);
  return string;
}
//toNextChar('ahwejhawehwaekhwazzhgdhabazdshzbzzz')


// viết hàm tạo mới một 1 string từ n ký tự từ vị trí đầu và cuối của chuỗi cũ
// newString("1wyg5yhd45", 2) // "1w45"
function newString(str, n){
	var string = '';
	length = str.length;
	string += str.substring(0,n)
	string += str.substring(length - n, length)
	console.log(string)
	return string;
}
// newString('describle',2)


/* Write a function that splits an array (first argument) into groups 
the length of size(second argument) and returns them as a two-dimensional array.
Example
 chunkArrayInGroups(["a", "b", "c", "d", "e"], 2) // [["a", "b"], ["c", "d"], ["e"]]
*/
function chunkArrayInGroups(arr, size) {
    var result = [];
    console.log(arr.length)
    while (arr.length > size) {
        result.push(arr.splice(0, size))
    }
    console.log(arr.length)
    if (arr.length)
        result.push(arr);

    return console.log(result);
}
// chunkArrayInGroups(["a", "b", "c", "d"], 2)

/* Write a function return maximum possible sum of some of its k consecutive numbers 
(numbers that follow each other in order.) of a given array of positive integers
*/
function maxOfSumChain(arr,k){
  var max = 0;
  var sumChain = 0;
  while(k > 0){
	  /*for(let i = 0; i < arr.length - 1; i++){
	  	  max = Math.max(arr[i], max)
	  }*/
	  		max = arr.reduce(function(a, b) {
	  	 	return Math.max(a,b)
	  	 })
	  	  //console.log(max)
	  	  sumChain += max;
		  arr.splice(arr.indexOf(max),1,null);
		  console.log(arr)
		  k--;
	}
	console.log(sumChain)
	return sumChain;
}

// maxOfSumChain([1,3,2,4,10,-1,12],3)


/* Hãy viết một hàm để tìm một số có số lần lặp lại nhiều nhất trong một dãy các số nguyên.

Input: dãy số
Output: 1 dãy số bao gồm các số có số lần lặp lại nhiều nhất

ví dụ:
Input: [1,2,3,4,1,2,2,1]
Output: [1,2]*/

function findMostFrequent(arr) {
// Viết code tại đây!
	var mostFrequent =[];
	//arr.sort();
	var ar = arr.map(function(value) {
		var array = arr.filter(function(x) {
			return value === x;
		})
		for(let i in arr){
			if(arr[i] === value){
				delete arr[i];			}
		}
		return array;
	}) // gộp những phần tử trùng nhau thành mảng của mảng.
	
	var maxLength = ar.reduce(function(a, b) {
		return Math.max(a,b.length);
	},0) // tìm tần số xuất hiện lớn nhất
	var result = ar.map(function(x){
		if(x.length === maxLength)
			return x; // return những mảng có tần số lớn nhất
	})
	result.forEach(function(x) {
		if(Array.isArray(x))
			mostFrequent.push(x[0])//push giá trị có tần số lớn nhất
	})
	return mostFrequent;
}
//findMostFrequent([3,1,2,3,4,'a',1,2,2,1,'a','a'])
//console.log(Math.max.apply([1,2,3,4,1,2,2,1]))


/*
Hãy viết một hàm để kiểm tra xem có thể sắp xếp các kí tự 
của 1 chuỗi String cho trước thành 1 chuỗi String cho trước khác không?

Input: 2 chuỗi String
Output: True hoặc False

ví dụ:

Input: abc cba
Output: True

Input: abx abb
Output: False
*/

function rearrangeChar(str1, str2) {
// Viết code tại đây!
var length = str1.length;
if(length !== str2.length)
	return false;
var count = 0;
arr1 = str1.split('');
arr2 = str2.split('');
arr1.sort();
arr2.sort();
for(let i in arr1) {
	if(arr1[i] === arr2[i])
		count ++;
}
if(count === length)
	return true;
return false;
}
// console.log(rearrangeChar('yhnbgt','hybtgn'))
// console.log(rearrangeChar('awef23f','n65u2r'))

/*
Hãy viết một hàm để tìm giá trị lớn nhất có thể đạt được 
của hiệu 2 số bất kì trong dãy số

Input: là một dãy số.
Output: giá trị lớn nhất có thể đạt được của hiệu 2 số bất kì trong dãy số.

Ví dụ:

Input: [1, 2, 3, 8, 9]
Output: 8 (là hiệu của 9 và 1)

*/

function findmaxDiff(arr){
  var result = [];
  	arr.map(function(x) {
  		arr.forEach(function(value) {
  			result.push(Math.abs(value - x))
  		})
  	})
  	var md = result.reduce(function(a,b) {
  		return Math.max(a,b)
  	})
  	console.log(md)
  	return md;
}
findmaxDiff([13, 2, 3, 8, 9])