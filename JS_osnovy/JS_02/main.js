var god__1;
var god__2;
var god__visakos_1;
var j = 1;

while (god__2 < god__1 || god__2 == "" || god__1 == "" || isNaN(god__1) || isNaN(god__2)) {
	god__1 = prompt("Запрос #" + j + "\nГод№1 определяющий начало отсчета");
	god__2 = prompt("Запрос #" + j + "\nГод№2 определяющий конец отсчета");
  // console.log(god__1);
  //   console.log(god__2);
	if (god__1 == "" || isNaN(god__1)) {
		alert("Запрещено вводить текст(не числа)\nИ оставлять поля пустыми");
	} else if (god__2 == "" || isNaN(god__2)) {
		alert("Запрещено вводить текст(не числа)\nИ оставлять поля пустыми");
	} else if (parseInt(god__2) < parseInt(god__1)) {
		alert("Первый год не должен быть больше второго");
	}
	j++;
	if (parseInt(god__2) > parseInt(god__1) && god__2 !== "" && god__1 !== "" && !isNaN(god__1) && !isNaN(god__2)) {
		alert("Года введены корректно нажмите OK для продолжения и откройте консоль");
		//преобразован. типов
		god__1 = parseInt(god__1);
		god__2 = parseInt(god__2);
		god__visakos_1 = parseInt(god__visakos_1);

		god__visakos_1 = god__1 % 4; ///осток после висакосного
		console.log(god__visakos_1 + "г. назад перед " + god__1 + " годом был висакосный год - " + (god__1 - god__visakos_1) + "г. \nКоторый определяет начало нашего отсчета.\n\n");
		god__visakos_1 = god__1 - god__visakos_1 + 4; //первый висакосный

		while (god__2 >= god__visakos_1) {
			console.log(god__visakos_1 + "=" + (god__visakos_1 - 4) + "+4"); //печать висакосных
			god__visakos_1 += 4;
		}
		console.log("\n\nи т.д...");

		break;
	}
	if (j == 3) {
		alert("Числа не введены, для продолжения нажмите F5 или перезагрузите страницу");
		break;
	}
}
