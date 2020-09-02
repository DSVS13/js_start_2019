function User(first_name, last_name, date_reg) {
	this.first_name = first_name;
	this.last_name = last_name;
	this.date_reg = date_reg;
	this.getFullName = function() {
		return this.first_name + ' ' + this.last_name + ' ' + this.date_reg;
	};
}

function Userlist() {
	var user_1;
	var users = [];
	var full_name = '';

	function user_object(full_name) {
		if (full_name === null) {
			return;
		}
		var time = new Date();
		var date_reg = (time.getDate() + '.' + (time.getMonth() + 1) + '.' + time.getFullYear() + ' ' + time.getHours() + ':' + time.getMinutes());
    user_1 = full_name.split(' ');
		var user = new User(user_1[0], user_1[1], date_reg);
		users.push(user);
		return (users);
	}

	function getAllUsers() {
		console.log(users[i].getFullName());
	}

	while (full_name !== null) {
		var full_name = prompt('Введите 1-имя и 2-фамелию через пробел');
		user_object(full_name);
	}

	var i = 0;
	console.log(users);
	while (users[i] !== undefined) {
		getAllUsers();
		i++;
	}

}


Userlist();
