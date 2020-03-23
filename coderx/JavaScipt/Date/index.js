// https://momentjs.com/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
/**
 * Viết hàm isWeekend nhận vào 1 ngày dưới dạng string YYYY/MM/DD trả về true nếu ngày đó là 1 ngày cuối tuần (Thứ 7 hoặc Chủ Nhật), ngược lại trả về false
 */
/*function isWeekend(dateString) {
	var day = new Date(dateString)
	day = day.getDay();
	if(day === 0 || day === 6)
		return true;
	return false;
}

console.log(isWeekend('2018/09/08'));
console.log(isWeekend('2018/09/07'));*/
/**
 * Viết hàm diff trả về số ngày chênh lệch giữa 2 ngày bất kì
 */
 
/*var fromDate = new Date('2019/10/17');
var toDate = new Date('2019/10/21');
 
function diff(fromDate, toDate) {
  const diffTime = Math.abs(fromDate - toDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  return diffDays;
}
console.log(diff(fromDate,toDate))*/
/**
 * Viết hàm subtractDays trả về 1 ngày trong quá khứ 
 * cách ngày được truyền vào n ngày
 */

var date = new Date("06/10/2019")

function subtractDays(date, n) {
  date.setDate( date.getDate() - n)
  console.log(date)
}
 subtractDays(date, 5)
