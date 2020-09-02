var number_1=Number();
var number_2=Number();
var j = 1;

//первое число
number_1 = prompt("Запрос #" +j+  " Укажите ЧИСЛО №1"+"\n\n\n");
while (number_1 == "" || isNaN(number_1)) {
  j++;
  number_1 = prompt("Запрос #" +j+  "\n\n   Запрещено в ЧИСЛО №1 задавать текст или не ЧИСЛО\n   После 3-го запроса число определится рандомно");
  if (j == 3){ number_1 = Math.floor(Math.random() * 11);}
}
//второе число
j = 1;
number_2 = prompt("Запрос #" +j+  " Укажите ЧИСЛО №2"+"\n\n\n");
while (number_2 == "" || isNaN(number_2))
{
  j++;
  number_2 = prompt("Запрос #" +j+  "\n\n   Запрещено в ЧИСЛО №2 задавать текст или не ЧИСЛО\n   После 2-го запроса число определится рандомно");
  // alert("На 3-м запроссе число определится рандомно");
  if (j == 2){number_2  = Math.floor(Math.random() * 11);}
}
      //вывод чисел
      if (number_2 == number_1)
      {
      alert("Числа равны :)");
      }
       else if (number_2 > number_1)
      {
      alert("ФЧИСЛО №2 > №1");
      }
      else   {
      alert("ФЧИСЛО №2 < №1");
      }
