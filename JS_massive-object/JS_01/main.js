function full_date() {
	var time = new Date();
	var month = new Array();
	month[0] = "января";
	month[1] = "февраля";
	month[2] = "марта";
	month[3] = "апреля";
	month[4] = "мая";
	month[5] = "июня";
	month[6] = "июля";
	month[7] = "августа";
	month[8] = "сентября";
	month[9] = "октября";
	month[10] = "ноября";
	month[11] = "декабря";
	var week = new Array();
	week[0] = "воскресенье";
	week[1] = "понедельник";
	week[2] = "вторник";
	week[3] = "среда";
	week[4] = "четверг";
	week[5] = "пятница";
	week[6] = "суббота";

	function numberes(number, number_1, number_2, number_3) {
		var number_indekator;
		var number_word;
		if (number == 1 || number == 21) {
			number_word = number_1;
		}
		if ((number >= 2 && number <= 4) || (number >= 21 && number <= 24)) {
			number_word = number_2;
		}
		if ((number >= 5 && number <= 20) || number === 0) {
			number_word = number_3;
		}
		if (number > 20) {
			number_indekator = number % 10;
			if (number_indekator == 1) {
				number_word = number_1;
			}
			if (number_indekator >= 2 && number_indekator <= 4) {
				number_word = number_2;
			}
			if (number_indekator >= 5 && number_indekator <= 10) {
				number_word = number_3;
			}
		}
		return number_word;
	}
	var hours = numberes(time.getHours(), 'час', 'часа', 'часов');
	var minutes = numberes(time.getMinutes(), 'минута', 'минуты', 'минут');
	var seconds = numberes(time.getSeconds(), 'секунда', 'секунды', 'секунд');
	console.log(
		'Сегодня ' + time.getDate() + ' ' + month[time.getMonth()] + ' ' + time.getFullYear() + ' года, ' + week[time.getDay()] + ', ' + time.getHours() + ' ' + hours + ', ' + time.getMinutes() +
		' ' + minutes + ', ' + time.getSeconds() + ' ' + seconds + '.'
	);
}


setInterval(function() {
	full_date();
}, 1000);
