/**
 * Sử dụng kiến thức đã học, tạo ra một ứng dụng danh bạ điện thoại, có các chức năng:
 * - Nhập dữ liệu contact (name, phone number)
 * - Sửa dữ liệu contact
 * - Xoá contact
 * - Tìm kiếm contact: có thể nhập vào tên (không dấu hoặc có dấu, chữ hoa hoặc chữ thường vẫn cho ra kết quả) hoặc 1 phần số điện thoại
 */
var readline = require('readline-sync');
var fs = require('fs');
var contacts = [];
function showMenu(){
	console.log('1.Show Contact.');
	console.log('2.Creat Contact.');
	console.log('3.Delete Contact.');
	console.log('4.Modify Contact.');
	console.log('5.Find Contact.');
	console.log('6.Save and exit.');
	var result = readline.question('>');//lệnh yêu cầu input
	switch (result){
		case '1':
			showContact();
			showMenu();
			break;
		case '2':
			creatContact();
			showMenu();
			break;
		case '3':
			deleteContact();
			showMenu();
			break;
		case '4':
			modifyContact();
			showMenu();
			break;
		case '5':
			findContact();
			showMenu();
			break;
		case '6':
			saveAndExit(contacts);
			break;
		default:
			console.log('Wrong key !');
			showMenu();
	};
}
function showContact(){
	for (var contact of contacts)
	console.log('name: '+ contact.name,'---','PhoneNumber: '+ contact.PNumber);
	
}
function creatContact(){
	var name = readline.question('name: ');
	var PNumber = readline.question('PhoneNumber: ');
	var contact ={};
	contact.name = name;
	contact.PNumber = parseInt(PNumber);//chuyển string sang int
	contacts.push(contact);//Thêm contact
	
}
function deleteContact(){
	var result = readline.question('The name you want to delete: ');
	var newContact = contacts.filter(function(obj){
		return obj.name !== result;
	});
	contacts = newContact;
	}
function modifyContact(){
	var result = readline.question('The name you want to modify: ');
	var name = readline.question('New name: ');
	var PNumber = readline.question('New phone number: ');
	contacts.forEach(function(item){
		if((item.name).toLowerCase() === result.toLowerCase()){
			item.name = name;
			item.PNumber = PNumber;

		}
	});
}
function findName(){
	var name = readline.question('The name you want to find: ');
	var find = contacts.filter(function(obj){
		return (obj.name).toLowerCase() === name.toLowerCase();
	})
	for (var contact of find)
	console.log('name: '+ contact.name,'---','PhoneNumber: '+ contact.PNumber);
}
function isThis(a,b){
	var array = b.split("");
	var array1 = a.split("")
	var count = 0;
	for(var i = 0; i < array.length ; i++)
	{
	  if(array1[i] === array[i])
	    count += 1;
	}
	if(count === array.length )
	  return true;
	return false;
}//Kiểm tra số điện thoại
function findNumber(){
	var number = readline.question('The number you want to find: ');
	for(var contact of contacts){
		var num = contact.PNumber;
		typeof num;
		if(isThis(num,number)){
			console.log('name: '+ contact.name,'---','PhoneNumber: '+ contact.PNumber);
		}
	}

}
function findContact(){
	var result = readline.question('Name(1) or PhoneNumber(2) : ');
	switch(result){
		case '1':
			findName();
			break;
		case '2':
			findNumber();
			break;
		default:
		console.log("Wrong key,please enter again !")
		findContact();
	}
	
}
function saveAndExit(obj){
	var text = JSON.stringify(contacts);//chuyen tu obj-string
	fs.writeFileSync('./data.json',text,{encoding: 'utf8'});
}

function main(){
	var ct = fs.readFileSync('./data.json',{encoding: 'utf8'});
main();