var god__1=Number();
var god__2=Number();
var j = 0;

while (j<10) {
	j++;
			god__1 = prompt("Запрос #" + j + "\nЧисло для ссумирования");
				if (god__1 == null){alert(god__2+"-общая сумма"); break;}
				if (isNaN(god__1)) {god__1=0;}
			god__2=Number(god__2)+Number(god__1);
			console.log(god__2);
}
