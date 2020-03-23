
/**
 * Thiết kế database cho 1 hệ thống quản lý thư viện sách, cho biết thư viện này có hàng trăm giá sách khác nhau,
  sách được để ở bất kì giá nào không theo danh mục nào.
 * Mỗi cuốn sách có 1 mã khác nhau.
 * Hệ thống cho phép đăng ký người dùng mới, một người có thể mượn nhiều sách khác nhau trong một khoảng thời gian hữu hạn.
 * Hệ thống có thể lưu lịch sử ai đã mượn sách nào, bắt đầu mượn từ bao lâu, trả lúc nào.
 * Hệ thống có lưu lại số ngày quá hạn tổng cộng của 1 người dùng, ví dụ sách A quá 2 ngày, sách B quá 3 ngày -> tổng 5 ngày
 */
/* Mượn (mã sinh viên, mã sách, ngày mượn, ngày trả, số ngày mượn)
 Loại sách (mã loại, tên loại)
 Sách (mã sách)
 Sinh viên (mã sinh viên, họ tên, lớp)
*/
var bookshelves = [
  {
    id: 0,
    books: [0,1,3,4]
  },
  {
    id: 1,
    books: [2,5,6]
  }
];

var books = [
  {
    id: 0,
    title: 'Coders-Tokyo',
    author: 'Thinh Pham',
    shelfId: 0
  },
  {
    id: 1,
    title: 'JavaScript',
    author: 'Thinh Pham',
    shelfId: 0
  },
  {
    id: 2,
    title: 'CSS-Thinh Pham',
    author: 'Thinh Pham',
    shelfId: 1
  },
  {
    id: 3,
    title: 'Conan',
    author: 'Aoyama Gosho',
    shelfId: 0
  },
  {
    id: 4,
    title: 'Naruto',
    author: 'Masashi Kishimoto',
    shelfId: 0
  },
  {
    id: 5,
    title: 'Harry Potter',
    author: 'J. K. Rowling',
    shelfId: 1
  }
];
var users = [
  {
    id: 0,
    userName: 'Pham Van Thien',
    password: '081296',
    borrowedBooks: [1,5]
  },
  {
    id: 1,
    userName: 'Nguyen Van Son',
    passWord: '250595',
    borrowedBooks: [2,3]
  },
  {
    id: 2,
    useName: 'Tran Dat',
    passWord: '230296',
    borrowedBooks: [2,4]
  }
];

var borrowedBooks = [
  {
    id: 1,
    borrowFor: 3,
    dayLeft: -2,
    user: 0,
    borrowedAt: 'Sep 8 2018 07:20'
  },
  {
    id: 5,
    borrowFor: 2,
    dayLeft: 1,
    user: 0,
    borrowedAt: 'Sep 9 2018 07:21'
  },
  {
    id: 2,
    borrowFor: 5,
    dayLeft: -1,
    user: 1,
    borrowedAt: 'Sep 10 2018 09:20'
  },
  {
    id: 3,
    borrowFor: 3,
    dayLeft: -2,
    user: 1,
    borrowedAt: 'Sep 10 2018 09:20'
  }
];

var history = [
  {
    id: 0,
    bookId: 1,
    user: 0,
    borrowedAt: 'Sep 8 2018 07:20',
    returnedAt: 'Sep 10 2018 9:20'
  }
];
var readline = require('readline-sync')
function getDaysOverdue() {
	var userName = readline.question('Input name: ')
  var getUser = users.find(x => {
    return x.userName === userName;
  });
  //console.log(getUser)

  var books = borrowedBooks.filter(x => {
    return getUser.id === x.user && x.dayLeft < 0;
  });


  var dayLeft = books.reduce((x, y) => {
    return x + Math.abs(y.dayLeft);
  }, 0);
  console.log(`Books borrowed by ${userName} has been overdue for ${dayLeft} day(s)`);
  }

  function getHistory() {
  for (let data of history) {
    var book = data.bookId;
    dataBook = books.find(x => {
      return x.id === book;
    });

    var user = data.user;
    dataUser = users.find(x => {
      return x.id === user;
    });

    console.log(`${dataUser.userName} borrowed a book named '${dataBook.title}' at ${data.borrowedAt} and returned it at ${data.returnedAt}.`);
  }
  
}
function showMenu() {
	console.log('1.Show history. ');
	console.log('2.Show Days Over due ');
	console.log('3.End. ')
	var result = readline.question('>');
	switch (result) {
		case '1' :
		getHistory();
		showMenu();
		break;
		case '2' :
		getDaysOverdue();
		showMenu();
		case '3' :
		break;
	default : 
		break;

	}
}
function main() {
	showMenu();
}
main();