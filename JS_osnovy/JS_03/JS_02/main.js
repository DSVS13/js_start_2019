var users = [{
	'login': 'bob_starskih',
	'porol': '04vashinkton',
	'name': 'Bob'
}, {
	'login': 'barbara_straizit',
	'porol': '40volt',
	'name': 'Barbara'
}, {
	'login': 'roman_polanskih',
	'porol': '13polundra',
	'name': 'Roman'
}, ];


function log_operation(users) {
	var log;
	var por;
	log = prompt("Введите логин");
	if (log === null || log === "") {
		alert("Логин не введен");
		return;
	}
	var j = 0;
	while (j < users.length) {
		if (log == users[j].login) {
			por = prompt("Введите пороль");
			if (por === null || por === "") {
				alert("Пороль не введен");
				return;
			} else if (por == users[j].porol) {
				alert("Здраствуйте " + users[j].name + "\nВы авторизованы!");
				return;
			} else {
				alert("Ошибка авторизиции\nПороль введён неверно");
				return;
			}
		} else if ((j) == users.length - 1) {
			{
				alert("Ошибка авторизиции\nВаш логин не найден в системе");
			}
		}
		j++;
	}
}

log_operation(users);
